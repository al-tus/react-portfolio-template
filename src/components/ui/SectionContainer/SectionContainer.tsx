import React from 'react'
import type {SectionContainerProps} from "./SectionContainer.types.ts";
import './SectionContainer.css'

const SectionContainer: React.FC<SectionContainerProps> = ({children, className, fullWidth}) => {
    return (
        <section className={`section-container ${className || ''}`}>
            <div className={`container${fullWidth ? '-full' : ''}`}>
                {children}
            </div>
        </section>
    )
}

export {SectionContainer}