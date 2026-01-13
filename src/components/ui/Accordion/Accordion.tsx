import React, {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Accordion.css'

export interface AccordionItem {
    id: string | number;
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({items, allowMultiple = false}) => {
    const [openIds, setOpenIds] = useState<(string | number)[]>([]);

    const toggleItem = (id: string | number) => {
        if (allowMultiple) {
            setOpenIds(prev =>
                prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
            )
        } else {
            setOpenIds(prev => (prev.includes(id) ? [] : [id]))
        }
    }

    return (
        <div className="accordion-container">
            {items.map((item, index) => {
                const isOpen = openIds.includes(item.id);

                return (
                    <div
                        key={item.id}
                        className="accordion__item"
                        data-aos='fade-right'
                        data-aos-delay={index * 200}
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="accordion__button"
                        >
                            <span className='accordion__header'>{item.title}</span>
                            <span className={`accordion__button-icon ${isOpen ? 'is-open' : ''}`}>
                                <IoIosArrowDown />
                            </span>
                        </button>

                        <div className={`accordion-title ${isOpen ? 'is-open' : ''}`}>
                            <div className="overflow-hidden">
                                <div className="accordion__content">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion;