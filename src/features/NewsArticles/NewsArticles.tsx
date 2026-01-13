import React from "react";
import articleImg from "./articles.ts";
import './NewArticles.css'

interface ServiceCard {
    category: string;
    title: string;
    description: string;
    imageUrl: string;
}



const articles: ServiceCard[] = [
    {
        category: 'BRANDING',
        title: 'What is the branding, and what we need it?',
        description: 'On the other hand, we denounce with righteous indignation and...',
        imageUrl: articleImg.img1,
    },
    {
        category: 'TIKTOK',
        title: 'What is the branding, and what we need it?',
        description: 'On the other hand, we denounce with righteous indignation and...',
        imageUrl: articleImg.img2,
    },
    {
        category: 'LOGO DESIGN',
        title: 'What is the branding, and what we need it?',
        description: 'On the other hand, we denounce with righteous indignation and...',
        imageUrl: articleImg.img3,
    },
    {
        category: 'FB',
        title: 'What is the branding, and what we need it?',
        description: 'On the other hand, we denounce with righteous indignation and...',
        imageUrl: articleImg.img4,
    },
    {
        category: 'AI',
        title: 'What is the branding, and what we need it?',
        description: 'On the other hand, we denounce with righteous indignation and...',
        imageUrl: articleImg.img5,
    },
    {
        category: 'NFT',
        title: 'What is the branding, and what we need it?',
        description: 'On the other hand, we denounce with righteous indignation and...',
        imageUrl: articleImg.img6,
    },
];


const NewsArticles: React.FC = () => {

    return (
        <div className='news-articles'>
            {articles.map((article, index) => (
                <div key={index} className='article__item' data-aos='fade-right'>
                    <div className="article__img">
                        <img src={article.imageUrl} alt={article.title} />
                    </div>
                    <div className="article__data">
                        <span>{article.category}</span>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NewsArticles;