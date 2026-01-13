import type {NavItem, SectionId} from "./NavList.types.ts";
import type {NavListProps} from "./NavList.types.ts";
import React from "react";

const navItems: NavItem[] = [
    {label : 'Process', href: '#process'},
    {label: 'Benefits', href: '#benefits'},
    {label: 'Services', href: '#services'},
    {label: 'Portfolio', href: '#portfolio'},
    {label: 'FAQ', href: '#faq'},
]

const NavList: React.FC<NavListProps> = ({ variant, className, onNavigate }) => {

    const handleClick = (e: React.MouseEvent, href: string) => {
        if (onNavigate) {
            e.preventDefault();

            const section = href.replace('#', '') as SectionId;
            onNavigate(section)
        }
    }

    return (
        <ul className={`nav-list nav--list--${variant} ${className || ''}`}>
            {navItems.map((item) => (
                <li key={item.href} className="nav-list__item">
                    <a href={item.href} className="nav-list__link" onClick={(e) => handleClick(e, item.href)}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export {NavList};