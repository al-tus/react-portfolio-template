import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import PlanCard, {type PricingPlan } from "../../components/ui/PlanCard/PlanCard.tsx";
import { useWindowSize } from "../../hooks/useWindowSize.tsx";

import 'swiper/css';
import './Prices.css';

const plans: PricingPlan[] = [
    {
        title: 'Standard',
        badge: 'Most Popular',
        description: 'One request at a time. For companies who need on-going design support.',
        price: '$2,995',
        period: '/m',
        subtext: 'Pause or cancel anytime',
        features: [
            '1x active task at a time',
            'Unlimited revisions',
            'Dedicated project manager',
            'Daily comms through Slack',
            'Work with senior designers',
            '2-3 days turn around time',
            'Top tier design',
        ],
    },
    {
        title: 'Growth',
        badge: 'Best value',
        description: 'Double the requests. For companies with increasing design needs. Limited spots.',
        price: '$4,795',
        period: '/m',
        subtext: 'Pause or cancel anytime',
        features: [
            '2x active task at a time',
            'Unlimited revisions',
            'Dedicated project manager',
            'Daily comms through Slack',
            'Work with senior designers',
            '2-3 days turn around time',
            'Top tier design',
        ],
        highlightFeatureIndex: 0,
    },
    {
        title: 'Basic - Weekly',
        description: 'Perfect if you want to try the subscription out or only have a few one-off tasks.',
        price: '$890',
        period: '/m',
        subtext: 'Paid per weekly',
        features: [
            'Fixed Scope of work',
            '2 rounds of revisions',
            'Dedicated project manager',
            'Daily comms through Slack',
            '1x designer',
            '2-5 days turn around time',
            'Top tier design',
        ],
    },
];

const Pricing: React.FC = () => {
    const width = useWindowSize();
    console.log("Current width:", width);
    const isMobile = width <= 1024;
    const is768 = width <= 768;



    return (
        <div className="pricing-wrapper">
            {isMobile ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={is768 ? 1 : 1.9}
                    centeredSlides={true}
                    initialSlide={1}
                    slidesPerGroup={1}
                    slideToClickedSlide={true}
                    touchRatio={1}
                    resistanceRatio={0}
                    freeMode={false}
                    shortSwipes={true}
                    longSwipes={false}
                >
                    {plans.map((plan, index) => (
                        <SwiperSlide key={index}>
                            <PlanCard plan={plan} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="pricing">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Pricing;