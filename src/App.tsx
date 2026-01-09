import {useRef} from 'react';

import Header from './features/Header/Header'
import Hero from "./features/Hero/Hero.tsx";
import InfoTitles from "./components/ui/InfoTitles/InfoTitles.tsx";
import Benefits from "./features/Benefits/Benefits.tsx";
import {SectionContainer} from "./components/ui/SectionContainer/SectionContainer.tsx";
import PortfolioProjects from "./features/PortfolioProjects/PortfolioProjects.tsx";
import Capabilities from "./features/Capabilities/Capabilities.tsx";
import {ContainerHeader} from "./components/ui/ContainerHeader/ContainerHeader.tsx";
import Slider from "./components/ui/Slider/Slider.tsx";
import Pricing from "./features/Prices/Prices.tsx";
import NewsArticles from "./features/NewsArticles/NewsArticles.tsx";
import FAQSection from "./features/Faq/Faq.tsx";
import GoodbyeBlock from "./features/GoodbyeBlock/GoodbyeBlock.tsx";
import Footer from "./features/Footer/Footer.tsx";
import type {SectionId} from "./components/ui/NavigarionList/NavList.types.ts";


function App() {
    const processRef = useRef<HTMLElement>(null);
    const benefitsRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const faqRef = useRef<HTMLElement>(null);

    const scrollToSection = (section: SectionId) => {
        const map = {
            process: processRef,
            benefits: benefitsRef,
            services: servicesRef,
            portfolio: portfolioRef,
            faq: faqRef,
        }

        map[section].current?.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <>
            <Header onNavigate={scrollToSection}/>
            <Hero />
            <SectionContainer ref={processRef}>
                <InfoTitles
                    label="how it work"
                    title="Get a dedicated design team at fraction of the cost."
                    description="Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits."
                    buttonText="See pricing"
                />
                <Benefits />
            </SectionContainer>
            <SectionContainer className='white pb-0' fullWidth={true} ref={portfolioRef}>
                <PortfolioProjects />
            </SectionContainer>
            <SectionContainer fluid={true} >
                <Capabilities innerRef={benefitsRef}/>
            </SectionContainer>
            <SectionContainer className='white'>
               <ContainerHeader label='testimonial' title='Customer is Our Top Priority' subtitle='We survey all of our clients, the results of which go directly to our CEO.'/>
                <Slider />
            </SectionContainer>
            <SectionContainer ref={servicesRef}>
                <ContainerHeader label='Clear & Simple Pricing' title='Simple pricing to level up your brand.' subtitle='Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.'/>
                <Pricing />
                <ContainerHeader label='blogs' title='News & Articles' subtitle='Best Articles to get started'/>
                <NewsArticles />
            </SectionContainer>
            <SectionContainer className='white' ref={faqRef}>
                <ContainerHeader title="FAQ's" subtitle='Providing answers to your questions'/>
                <FAQSection />
            </SectionContainer>
            <GoodbyeBlock />
            <Footer onNavigate={scrollToSection}/>
    </>
  )
}

export default App
