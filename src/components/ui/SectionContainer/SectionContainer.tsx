import {forwardRef} from 'react'
import type {SectionContainerProps} from "./SectionContainer.types.ts";
import './SectionContainer.css'


const SectionContainer= forwardRef<HTMLElement, SectionContainerProps>(
    ({children, className, fullWidth, fluid}, ref) => {
    return (
        <section ref={ref} className={`section-container ${className || ''}`}>
            <div className={
                `container${
                    fullWidth 
                        ? '-full' 
                        : fluid 
                            ? '-fluid' 
                            : ''}`
                }
            >
                {children}
            </div>
        </section>
    )
}
)

SectionContainer.displayName = 'SectionContainer';

export {SectionContainer}