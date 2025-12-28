import Header from './features/Header/Header'
import Hero from "./features/Hero/Hero.tsx";
import InfoTitles from "./features/InfoTitles/InfoTitles.tsx";
import Benefits from "./features/Benefits/Benefits.tsx";
import {SectionContainer} from "./components/ui/SectionContainer/SectionContainer.tsx";
import PortfolioProjects from "./features/PortfolioProjects/PortfolioProjects.tsx";


function App() {

  return (
    <>
            <Header />
            <Hero />
            <SectionContainer>
                <InfoTitles
                    label="how it work"
                    title="Get a dedicated design team at fraction of the cost."
                    description="Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits."
                    buttonText="See pricing"
                />
                <Benefits />
            </SectionContainer>
            <SectionContainer className='white pb-0' fullWidth={true}>
                <PortfolioProjects />
            </SectionContainer>

    </>
  )
}

export default App
