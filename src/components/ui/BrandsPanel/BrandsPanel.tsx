import React, {useEffect, useRef, useState} from "react";
import './BrandsPanel.css'
import {useWindowSize} from "../../../hooks/useWindowSize.tsx";

import circoolesLogo from '../../../assets/images/circooles-logo.svg';
import commandRLogo from '../../../assets/images/command_r-logo.svg';
import hourglassLogo from '../../../assets/images/hourglass-logo.svg';
import layersLogo from '../../../assets/images/layers-logo.svg';
import quotientLogo from '../../../assets/images/quotient-logo.svg';

const BrandsPanel: React.FC = () => {
    const width = useWindowSize();
    const shouldAnimate = width <= 768;
    const containerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (!shouldAnimate) {
            return;
        }

        const container = containerRef.current;
        if (!container) return;

        const speed = 50;
        let animationId: number;
        let lastTime = performance.now();

        const animate = (currentTime: number) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            setOffset(prevOffset => {
                const newOffset = prevOffset + speed * deltaTime;

                const scrollWidth = container.scrollWidth / 2;

                if (newOffset >= scrollWidth) {
                    return newOffset - scrollWidth;
                }

                return newOffset;
            });

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);


        return () => cancelAnimationFrame(animationId);
    }, [shouldAnimate]);

    const brands = [
        { id: 1, src: circoolesLogo, alt: 'Circooles' },
        { id: 2, src: commandRLogo, alt: 'CommandR' },
        { id: 3, src: hourglassLogo, alt: 'Hourglass' },
        { id: 4, src: layersLogo, alt: 'Layers' },
        { id: 5, src: quotientLogo, alt: 'Quotient' },
    ]

    return (
        <div className="brands-panel" data-aos="fade-in">
            <div className="brands-panel__header">
                <p  data-aos="fade-in" >
                    TRUSTED BY AMAZING BRANDS
                </p>
            </div>
            <div className="brands-panel__body">
                <div className="brands-panel__con"
                    ref={containerRef}
                     style={shouldAnimate ? {
                         transform: `translateX(-${offset}px)`,
                         willChange: "transform",
                     }: {}}
                >
                    { brands.map(brand => (
                        <img key={`first-${brand.id}`} src={brand.src} alt={brand.alt} className="brands-panel__img"
                             data-aos="fade-right" data-aos-delay={brand.id * 100}/>
                    ))}

                    {shouldAnimate && brands.map(brand => (
                        <img key={`last-${brand.id}`} src={brand.src} alt={brand.alt} className="brands-panel__img" />
                    ))}
                </div>


            </div>
        </div>
    )
}

export { BrandsPanel }