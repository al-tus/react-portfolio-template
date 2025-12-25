import React from "react";
import type {InfoTitlesProps} from "./InfoTitles.types.ts";
import {Button} from "../../components/ui/Button/Button.tsx";

import './InfoTitles.css'


const InfoTitles: React.FC<InfoTitlesProps> = ({
    label,
    title,
    description,
    buttonText,
    onButtonClick
                                               }) => {
    return (
        <div className="info-title">
            <span className="info-title__label">
                {label}
            </span>

            <div className="info-title__grid">
                <div className="info-title__left">
                    <h2 className='info-title__title'>
                        {title}
                    </h2>
                </div>
                <div className="info-title__right">
                    <p className="info-title__text">
                        {description}
                    </p>
                    <Button onClick={onButtonClick} variant='primary'>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default InfoTitles;