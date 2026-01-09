import React from "react"
import './Benefits.css'

import rocketIcon from '../../assets/images/rocket-icon.svg'
import penIcon from '../../assets/images/pen-icon.svg'
import revisionIcon from '../../assets/images/revision-icon.svg'
import benefitArrow from '../../assets/images/benefit-arrow.svg'
import type {BenefitsItem} from "./Benefits.types.ts";


const Benefits: React.FC = () => {
    const benefitsList: BenefitsItem[] = [
        {
            id: 1,
            icon: rocketIcon,
            alt: 'Rocket icon',
            title: 'Subscribe & get started',
            description: 'Submit as many design tasks as you need without worrying about individual project fees.'
        },
        {
            id: 2,
            icon: penIcon,
            alt: 'Pen icon',
            title: 'Polished designs - on time',
            description: 'Our designers get to work to deliver your request. Receive your design within a few days.'
        },
        {
            id: 3,
            icon: revisionIcon,
            alt: 'Revision icon',
            title: 'Revisions made simple',
            description: 'Custom designs, prompt replies and as many revisions as you need.'
        }
    ]

    return (
        <div className="benefits">
            {benefitsList.map((benefit) => (
                <div className='benefits__item' key={benefit.id}>
                    <div className='benefits__icon-wrapper'>
                        <div className="benefits__icon">
                            <img src={benefit.icon} alt={benefit.alt} />
                        </div>
                        <img className='benefit__arrow' src={benefitArrow} alt="Benefit Arrow"/>
                    </div>

                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Benefits