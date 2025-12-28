import React from "react";
import {ContainerHeader} from "../../components/ui/ContainerHeader/ContainerHeader.tsx";

import './PortgolioProjects.css'
import {Button} from "../../components/ui/Button/Button.tsx";
import {LoadingIcon} from "../../components/icon/landing/LoadingIcon.tsx";

interface portfolioImgModule {
    default: string;
}

const PortfolioProjects: React.FC = () => {

    const portfolioImg = import.meta.glob<portfolioImgModule>(
        '../../assets/images/portfolio/*.{png,jpg,jpeg,webp}',
        {eager: true});

    const portfolioUrls = Object.values(portfolioImg).map((mod) => mod.default);

    const chunks = portfolioUrls.reduce<string[][]>((acc, url, i) => {
        const chunkIndex = Math.floor(i / 3 );
        if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(url);
        return acc;

    }, [])

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

                <div className={'portfolio__grid'}>
                    {chunks.map((chunk, blockIdx) => (
                        <div key={blockIdx} className={`portfolio__block portfolio__block--${blockIdx}`}>
                            {chunk.map((src, imgIdx) => (
                                <img key={imgIdx} src={src} alt="" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioProjects