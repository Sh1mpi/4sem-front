import { FC } from "react";
import { IUniversity } from "../models/IUniversity";
import { CardStyled } from "./styles/styles";


const CardUniversity: FC<{ data: IUniversity }> = ({data}) => (
    <CardStyled>
        <h2>{data.name}</h2>
        <h3>{data.country}</h3>
    </CardStyled>
)

export default CardUniversity;