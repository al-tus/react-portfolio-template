
import {Button} from "../../components/ui/Button/Button.tsx";
import {BrandsPanel} from "../../components/ui/BrandsPanel/BrandsPanel.tsx";

import './Hero.css'

const Hero = () => {
    return (
        <div className="container-fluid">
            <div className="hero">
                <div className="hero__title">
                    <h1>
                        Bringing your
                        dream into <span>reality</span>
                    </h1>
                    <p>We increase revenue and ensure sustainable long-term growth <br />
                        for your business through powerful Webflow websites.</p>
                </div>
                <Button variant='primary'>
                    Book A Meeting
                </Button>

                <BrandsPanel />
            </div>
        </div>
    )
}

export default Hero