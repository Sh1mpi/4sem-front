import {FC, useEffect, useState} from "react";
import CardUniversity from "./CardUniversity";
import {useInView} from 'react-intersection-observer';
import axios from "axios";
import { BlockObserver, ListStyled } from "./styles/styles";
import { IUniversity } from "../models/IUniversity";


const LIMIT_UNIVERSITIES = 15;


const DynamicPagination: FC = () => {
    const [universities, setUniversities] = useState<Array<IUniversity>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUniversities()
    }, [currentPage])

    const {ref, inView} = useInView({
        threshold: 1.0,
    });

    useEffect(() => {
        if (inView) {
            setCurrentPage((prev) => prev + 1)
        }
    }, [inView]);

    const fetchUniversities = async () => {
        try {
            const offset = (currentPage - 1) * LIMIT_UNIVERSITIES
            const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`)
            setUniversities((prev) => [...prev, ...response.data])
        } catch (error) {
            console.log('Error fetching univer...', error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <ListStyled>
            <h1>List Universities</h1>
            {
                universities.map((university) => (
                    <CardUniversity data={university} key={university.name}></CardUniversity>
                ))  
            }
            {loading && <div>Loading...</div>}
            {!loading && <BlockObserver ref={ref}></BlockObserver>}
        </ListStyled>
    )
}

export default DynamicPagination;
