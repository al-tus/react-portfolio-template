import React from "react";
import {ContainerHeader} from "../../components/ui/ContainerHeader/ContainerHeader.tsx";
import {Button} from "../../components/ui/Button/Button.tsx";
import './Capabilities.css'
import InfoTitles from "../../components/ui/InfoTitles/InfoTitles.tsx";
import BenefitsGrid from "../../components/ui/BenefitsGrid/BenefitsGrid.tsx";

const CapabilitiesTales = [
    'Web design & UI',
    'Social media visuals',
    'Infographics',
    'Design system',
    'Email design',
    'Stationery',
    'Icons',
    'Packaging & merch',
    'Signage',
    'Brochures',
    'Logos & branding',
    'Digital ads',
    'Wireframes'
]

interface CapabilitiesProps {
    innerRef?: React.RefObject<HTMLElement | null>;
}


const Capabilities: React.FC<CapabilitiesProps> = ({innerRef}) => {
    return (
        <div className="capabilities">
            <div className="section__header">
                <ContainerHeader title='We can help you with...' label='Our capabilities'/>
            </div>
            <div className="capabilities__tales">
                {CapabilitiesTales.map((title, index) => (
                    <Button variant='primary' key={index}>
                        {title}
                    </Button>
                ))}
            </div>

            <div className="container" ref={innerRef as React.RefObject<HTMLDivElement>}>
                <InfoTitles
                    label='BENEFITS'
                    title='The design subscription that connects you to your dream team'
                    description='A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.'
                    buttonText='See Pricing'
                />

                <BenefitsGrid/>
            </div>
        </div>

    )
}

export default Capabilities;