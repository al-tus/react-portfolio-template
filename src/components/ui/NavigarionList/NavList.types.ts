export interface NavItem {
    label: string;
    href: string;
}

export interface NavListProps {
    variant: 'header' | 'footer';
    className?: string;
}