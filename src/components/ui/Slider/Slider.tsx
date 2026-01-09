import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";


import './Slider.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useState} from "react";

interface Review {
    id: number;
    company: string;
    logo: string;
    title: string;
    text: string;
    author: {
        name: string;
        position: string;
        photo: string;
    };
}

import DianaReview from '../../../assets/images/review-3.png'
import AlexeyReview from '../../../assets/images/review-1.png'
import ElenaReview from '../../../assets/images/review-2.png'

import ReviewLogo from '../../../assets/images/review-logo.png'


const reviews: Review[] = [
    {
        id: 1,
        company: "Gymstory",
        logo: ReviewLogo,
        title: "Exceptional Development Standards!",
        text: "The team delivered a complex client dashboard with seamless payment gateway integration. Their attention to detail and technical execution is top-notch. Highly recommended for enterprise-level projects.",
        author: {
            name: "Diana Loreza",
            position: "Director of Gymstory",
            photo: DianaReview
        }
    },
    {
        id: 2,
        company: "FinTech Solutions",
        logo: ReviewLogo,
        title: "Best Outsourcing Experience Ever",
        text: "We needed a rapid redesign of our banking calculators. They completed the project in just two weeks while maintaining high performance across all mobile devices. Truly impressed by their speed.",
        author: {
            name: "Alexey Smirnov",
            position: "CTO at FinTech Solutions",
            photo: AlexeyReview
        }
    },
    {
        id: 3,
        company: "EduPlatform",
        logo: ReviewLogo,
        title: "Incredible Dynamic Elements",
        text: "They developed a sophisticated testing system with interactive parameter selection. The code is clean, well-documented, and the UI is intuitive. We look forward to our next collaboration.",
        author: {
            name: "Elena Vlasova",
            position: "Product Manager",
            photo: ElenaReview
        }
    }
];

const Slider = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (
        <div className='reviews__slider'>
            <Swiper
                spaceBetween={0}
                modules={[Navigation]}
                autoHeight={false}
                navigation={{
                    prevEl,
                    nextEl,
                }}
                slidesPerView={1}
                loop={true}
            >

                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className='reviews__item'>
                            <div className="reviews__body">

                                <img src={review.logo} alt=""/>

                                <div className="reviews__title">
                                    <h4>{review.title}</h4>

                                    <p>{review.text}</p>
                                </div>

                                <div className="reviews__author">
                                    <p className='name'>{review.author.name}</p>
                                    <p>{review.author.position}</p>
                                </div>
                            </div>

                            <div className="reviews__photo">
                                <img src={review.author.photo} alt={review.author.name}/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={(node) => setPrevEl(node)}
                className="prev-btn slider-btn"
            >
                <IoIosArrowBack />
            </button>

            <button
                ref={(node) => setNextEl(node)}
                className="next-btn slider-btn"
            >
                <IoIosArrowForward />
            </button>
        </div>



    );
};

export default Slider;