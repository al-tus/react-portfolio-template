import React from "react";
import type {ContainerHeaderProps} from "./ContainerHeader.types.ts";

import './ContainerHeader.css'

const ContainerHeader: React.FC<ContainerHeaderProps>  = ({label, title, subtitle}) => {
    return (
        <div className='container-header'>
            {label ? <span data-aos="fade-up">{label}</span> : null}
            <h2 data-aos="fade-up" data-aos-delay="200">{title}</h2>
            <p data-aos="fade-up" data-aos-delay="400">{subtitle}</p>
        </div>
    )
}

export { ContainerHeader };