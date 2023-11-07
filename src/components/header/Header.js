import { Link } from "react-router-dom";
import { useState } from "react";

import "./header.scss";

const Header = ({setTheme, theme}) => {

    const [active, setActive] = useState(parseInt(sessionStorage.getItem('activeTab')) || 0);
    const [temp, setTemp] = useState(theme === "light" ? false : true);

    let prefix = theme === "light" ? "header" : "darkheader";

    const handleClick = (index) => {
        sessionStorage.setItem('activeTab', index);
        setActive(index);
    };    

    const links = [
        {to: '/', text: 'ГОЛОВНА'},
        {to: '/education', text: 'ОСВІТА'},
        {to: '/skills', text: 'НАВИЧКИ'},
        {to: '/works', text: 'РОБОТИ'},
    ]

    const socials = [
        {lightimg: "/resources/icons/social/telegram.svg", darkimg: "/resources/icons/social/darktelegram.svg", alt: 'telegram', href: 't.me/artbed'},
        {lightimg: "/resources/icons/social/facebook.svg", darkimg: "/resources/icons/social/darkfacebook.svg", alt: 'facebook', href: 'https://www.facebook.com/artem.bedlinskiy'},
        {lightimg: "/resources/icons/social/Instagram.svg", darkimg: "/resources/icons/social/darkInstagram.svg", alt: 'instagram', href: 'https://www.instagram.com/artembedlinsky/'},
        {lightimg: "/resources/icons/social/linkedin.svg", darkimg: "/resources/icons/social/darklinkedin.svg", alt: 'linkedIn', href: 'https://www.linkedin.com/in/artem-bedlinskyi-558778221/'},
        {lightimg: "/resources/icons/social/github.svg", darkimg: "/resources/icons/social/darkgithub.svg", alt: 'github', href: 'https://github.com/Sorini92'},
    ];

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
                {theme !== "light" ? <img src={process.env.PUBLIC_URL + item.darkimg} alt={item.alt}/> : <img src={process.env.PUBLIC_URL + item.lightimg} alt={item.alt}/>}
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
                        {theme === "light" ? <img src={process.env.PUBLIC_URL + "/resources/icons/light.svg"} alt="light theme icon"/> : <img src={process.env.PUBLIC_URL + "/resources/icons/dark.png"} alt="dark theme icon"/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;