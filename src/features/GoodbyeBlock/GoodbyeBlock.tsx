import {Button} from "../../components/ui/Button/Button.tsx";
import { IoArrowForwardCircle } from "react-icons/io5";
import './GoodbyeBlock.css'

const GoodbyeBlock = () => {
    return (
        <div className="goodbye__block" data-aos='fade-in'>
            <div className="container-fluid">
                <div className="goodbye__section">
                    <h2>
                        Become part of the design revolution
                    </h2>
                    <p>Jump on a membership and start requesting designs right away!</p>

                    <Button variant='primary'> See pricing <IoArrowForwardCircle /></Button>
                </div>
            </div>
        </div>
    )
}

export default GoodbyeBlock