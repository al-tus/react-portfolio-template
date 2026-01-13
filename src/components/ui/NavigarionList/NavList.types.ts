export type SectionId = 'process' | 'benefits' | 'services' | 'portfolio' | 'faq';


export interface NavItem {
    label: string;
    href: string;
}

export interface NavListProps {
    variant: 'header' | 'footer',
    className?: string,
    onNavigate?: (section: SectionId) => void,
    isOpen?: boolean
}