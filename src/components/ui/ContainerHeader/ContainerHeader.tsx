import React from "react";
import type {ContainerHeaderProps} from "./ContainerHeader.types.ts";

import './ContainerHeader.css'

const ContainerHeader: React.FC<ContainerHeaderProps>  = ({label, title, subtitle}) => {
    return (
        <div className='container-header'>
            {label ? <span>{label}</span> : null}
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export { ContainerHeader };