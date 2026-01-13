import React from "react";
import type {BenefitsGridTypes} from "./BenefitsGrid.types.ts";

import './BenefitsGrid.css'

import infinityIcon from '../../../assets/images/infinity-icon.png';
import designToolIcon from '../../../assets/images/design-tool-icon.png';
import lightningIcon from '../../../assets/images/lightning-icon.png';
import settingsCycleIcon from '../../../assets/images/settings-cycle-icon.png';
import expertStarsIcon from '../../../assets/images/expert-stars-icon.png';
import webflowIcon from '../../../assets/images/webflow-icon.png';
import moneyClickIcon from '../../../assets/images/money-click-icon.png';
import calendarIcon from '../../../assets/images/calendar-icon.png';
import dollarExchangeIcon from '../../../assets/images/dollar-exchange-icon.png';

const benefits: BenefitsGridTypes[] = [
    {
        title: "On-demand requests",
        description: "Put all your requests in the design queue in Trello, and we'll knock them out 1 by 1.",
        icon: infinityIcon
    },
    {
        title: "Top-notch quality",
        description: "High-end work from a dedicated team of senior designers that's always available when you need it.",
        icon: lightningIcon
    },
    {
        title: "Powered by - Webflow",
        description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It's easy for you like Squarespace but better.",
        icon: webflowIcon
    },
    {
        title: "Fast. Responsive. Reliable.",
        description: "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
        icon: designToolIcon
    },
    {
        title: "No Lock in contracts",
        description: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.",
        icon: calendarIcon
    },
    {
        title: "Great value for money",
        description: "Get the power of dedicated design team at fraction of the cost of full-time employee. ($54k/yr vs. $112k/yr).",
        icon: dollarExchangeIcon
    },
    {
        title: "Customized for you",
        description: "We design and build custom for you. We're never starting from a template unless you want that? You don't, right?",
        icon: settingsCycleIcon
    },
    {
        title: "Creative billing",
        description: "We're here when you need us and not on payroll when you don't.",
        icon:moneyClickIcon
    },
    {
        title: "Expert turnovers",
        description: "You're getting 10+ years of design experience with every request. No hand-holding required.",
        icon: expertStarsIcon
    }
];


const BenefitsGrid: React.FC = () => {
    return (
        <div className='benefits__grid' data-aos="fade-in">
            {benefits.map((benefit, index) => (
                <div key={index} className='benefits__grid-item'>
                    <img src={benefit.icon} alt='grid-icon'/>
                    <h5>{index + 1}. {benefit.title}</h5>
                    <p>
                        {benefit.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default BenefitsGrid;