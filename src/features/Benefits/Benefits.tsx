import React from "react"
import './Benefits.css'

import rocketIcon from '../../assets/images/rocket-icon.svg'
import penIcon from '../../assets/images/pen-icon.svg'
import revisionIcon from '../../assets/images/revision-icon.svg'
import type {BenefitsItem} from "./Benefits.types.ts";
import BenefitCard from "../../components/ui/BenefitCard/BenefitCard.tsx";

import {useWindowSize} from "../../hooks/useWindowSize.tsx";
import {Swiper, SwiperSlide} from "swiper/react";



const Benefits: React.FC = () => {
    const width = useWindowSize();
    const is576 = width <= 576

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
            {is576 ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={ 1.1}
                >
                    {benefitsList.map((benefit, index) => (
                        <SwiperSlide>
                            <BenefitCard benefit={benefit} key={index}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                benefitsList.map((benefit, index) => (
                        <BenefitCard benefit={benefit} key={index}/>
                ))
            )}


        </div>
    )
}

export default Benefits