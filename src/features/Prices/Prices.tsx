import React from "react";
import './Prices.css'
import {Button} from "../../components/ui/Button/Button.tsx";


interface PricingPlan {
    title: string;
    badge?: string;
    description: string;
    price: string;
    period: string;
    subtext: string;
    features: string[];
    highlightFeatureIndex?: number;
}

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
]


const Pricing: React.FC = ()=>  {
    return (
        <div className="pricing">
            {plans.map((plan, index) => (
                <div className="plan__item" key={index}>
                    <div className="plan__info">
                        <div className="plan__name">
                            <h3>{plan.title}</h3>
                            {plan.badge && (
                                <span className={`text-xs font-bold py-1 px-3 rounded-full ${
                                    plan.badge === 'Most Popular' ? 'bg-primary' : 'bg-white'
                                }`}>
                              {plan.badge}
                            </span>
                            )}
                        </div>
                        <p className='price-subt'>
                            {plan.description}
                        </p>
                    </div>
                    <hr />
                    <div className="plan__price">
                        <span>{plan.price}{plan.period}</span>

                        <p className="price-subt">{plan.subtext}</p>
                    </div>
                    <hr />
                    <div className="plan_features">
                        {plan.features.map((feature, index) => (
                            <ul className="feature" key={index}>
                                <li>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.05436 0.82848C6.36705 -0.276181 7.9328 -0.276178 8.24549 0.828483L9.22513 4.28927C9.33281 4.6697 9.63014 4.96703 10.0106 5.07472L13.4714 6.05436C14.576 6.36705 14.576 7.9328 13.4714 8.24549L10.0106 9.22513C9.63014 9.33281 9.33281 9.63014 9.22513 10.0106L8.24549 13.4714C7.9328 14.576 6.36705 14.576 6.05436 13.4714L5.07472 10.0106C4.96703 9.63014 4.6697 9.33281 4.28927 9.22513L0.82848 8.24549C-0.276181 7.9328 -0.276178 6.36705 0.828483 6.05436L4.28927 5.07472C4.6697 4.96703 4.96703 4.6697 5.07472 4.28927L6.05436 0.82848Z" fill="#B9FD50"/>
                                    </svg>
                                    {feature}
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="plan_btn">
                        <Button variant='outline'>
                            Book A Call
                        </Button>
                        <Button variant='primary'>
                            Click to buy
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Pricing;