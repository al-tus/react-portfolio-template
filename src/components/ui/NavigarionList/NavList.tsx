import type {NavItem} from "./NavList.types.ts";
import type {NavListProps} from "./NavList.types.ts";

const navItems: NavItem[] = [
    {label : 'Process', href: '#process'},
    {label: 'Benefits', href: '#benefits'},
    {label: 'Services', href: '#services'},
    {label: 'Portfolio', href: '#portfolio'},
    {label: 'FAQ', href: '#fa'},
]

const NavList: React.FC<NavListProps> = ({ variant, className }) => {
    return (
        <ul className={`nav-list nav--list--${variant} ${className || ''}`}>
            {navItems.map((item) => (
                <li key={item.href} className="nav-list__item">
                    <a href={item.href} className="nav-list__link">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export {NavList};