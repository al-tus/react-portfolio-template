import React from "react";
import type {BenefitsItem} from "../../../features/Benefits/Benefits.types.ts";
import benefitArrow from '../../../assets/images/benefit-arrow.svg'

 const BenefitCard: React.FC<{benefit: BenefitsItem}> = ({benefit}) => {
    return (
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

    )

 }

 export default BenefitCard;