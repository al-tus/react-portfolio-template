import React from "react";
import './BrandsPanel.css'

import circoolesLogo from '../../../assets/images/circooles-logo.svg';
import commandRLogo from '../../../assets/images/command_r-logo.svg';
import hourglassLogo from '../../../assets/images/hourglass-logo.svg';
import layersLogo from '../../../assets/images/layers-logo.svg';
import quotientLogo from '../../../assets/images/quotient-logo.svg';

const BrandsPanel: React.FC = () => {
    const brands = [
        { id: 1, src: circoolesLogo, alt: 'Circooles' },
        { id: 2, src: commandRLogo, alt: 'CommandR' },
        { id: 3, src: hourglassLogo, alt: 'Hourglass' },
        { id: 4, src: layersLogo, alt: 'Layers' },
        { id: 5, src: quotientLogo, alt: 'Quotient' },
    ]

    return (
        <div className="brands-panel">
            <div className="brands-panel__header">
                <p>
                    TRUSTED BY AMAZING BRANDS
                </p>
            </div>
            <div className="brands-panel__body">
                {brands.map(brand => (
                    <img key={brand.id} src={brand.src} alt={brand.alt} className="brands-panel__img" />
                ))}
            </div>
        </div>
    )
}

export { BrandsPanel }