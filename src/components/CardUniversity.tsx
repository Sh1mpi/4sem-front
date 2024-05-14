import { FC } from "react";
import styled from "styled-components";
import { IUniversity } from "./DynamicPagination";


const CardStyled = styled.div`
    height: 150px;
    background-color: #e9e7e7;
    color: red;
`

const CardUniversity: FC<{ data: IUniversity }> = ({data}) => (
    <CardStyled>
        <h2>{data.name}</h2>
        <h3>{data.country}</h3>
    </CardStyled>
)

export default CardUniversity;