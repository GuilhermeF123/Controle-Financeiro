import React from 'react'
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa"


export const Resume = ({entrada, saida, total}) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={entrada} />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={saida}/>
            <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    );
};
export default Resume;