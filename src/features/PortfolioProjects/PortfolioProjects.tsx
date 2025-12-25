import React from "react";
import {ContainerHeader} from "../../components/ui/ContainerHeader/ContainerHeader.tsx";

import './PortgolioProjects.css'
import {Button} from "../../components/ui/Button/Button.tsx";
import {LoadingIcon} from "../../components/icon/landing/LoadingIcon.tsx";


const PortfolioProjects: React.FC = () => {
    return (
        <div className='portfolio'>
            <div className="portfolio__header">
                <ContainerHeader
                    title='Our Beautiful Works'
                    subtitle='We help our clients grow their bottom-line with clear and professional websites.'
                />

                <Button className='btn--load'>
                    <LoadingIcon color={'dark'} size={24} />
                    Load more
                </Button>
            </div>
        </div>
    )
}

export default PortfolioProjects