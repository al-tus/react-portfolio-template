import type {ReactNode} from "react";

export interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
    fluid?: boolean;
}