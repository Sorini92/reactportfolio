import { Link } from "react-router-dom";
import { useState } from "react";

import "./header.scss";

const Header = ({setTheme, theme}) => {

    const [active, setActive] = useState(0);
    const [temp, setTemp] = useState(theme === "light" ? false : true);
    
    const handleClick = (index) => {
        setActive(index);
    };    

    const links = [
        {to: '/', text: 'Главная'},
        {to: '/education', text: 'Образование'},
        {to: '/skills', text: 'Навыки'},
        {to: '/works', text: 'Работы'},
    ]

    const socials = [
        {lightimg: "resources/icons/social/telegram.svg", darkimg: "resources/icons/social/darktelegram.svg", alt: 'telegram', href: ''},
        {lightimg: "resources/icons/social/facebook.svg", darkimg: "resources/icons/social/darkfacebook.svg", alt: 'facebook', href: ''},
        {lightimg: "resources/icons/social/Instagram.svg", darkimg: "resources/icons/social/darkInstagram.svg", alt: 'instagram', href: ''},
        {lightimg: "resources/icons/social/linkedin.svg", darkimg: "resources/icons/social/darklinkedin.svg", alt: 'linkedIn', href: ''},
        {lightimg: "resources/icons/social/github.svg", darkimg: "resources/icons/social/darkgithub.svg", alt: 'github', href: ''},
    ];

    let prefix = theme === "light" ? "header" : "darkheader";

    const handleChangeTheme = (temp) => {
        if (temp === false) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        setTemp(!temp);
    }

    const tabs = links.map((item, i) => {
        return (
            <Link 
                key={i} 
                to={item.to} 
                className={i === active ? `${prefix}__active` : `${prefix}__link`} 
                onClick={() => handleClick(i)}>
                    {item.text}
            </Link>
        )
    })

    const elements = socials.map((item, i) => {
        return (
            <a href={item.href} key={i} className={`${prefix}__social`} target="_blank" rel="noreferrer">
                {theme !== "light" ? <img src={item.darkimg} alt={item.alt}/> : <img src={item.lightimg} alt={item.alt}/>}
            </a>
        )
    })

    return (
        <div className={`${prefix}`}>
            <div className={`${prefix}__links`}>
                {tabs}
            </div>
            <div className={`${prefix}__socials`}>
                {elements}
                <div value={temp} className="switcher" onClick={() => handleChangeTheme(temp)}>
                    <div className={theme !== "light" ? "switcher__circle" : "switcher__darkcircle"}>
                        {theme === "light" ? <img src="resources/icons/light.svg" alt="light theme icon"/> : <img src="resources/icons/dark.png" alt="dark theme icon"/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;