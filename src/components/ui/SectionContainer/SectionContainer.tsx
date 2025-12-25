import React from 'react'
import type {SectionContainerProps} from "./SectionContainer.types.ts";
import './SectionContainer.css'

const SectionContainer: React.FC<SectionContainerProps> = ({children, className}) => {
    return (
        <section className={`section-container ${className || ''}`}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export {SectionContainer}