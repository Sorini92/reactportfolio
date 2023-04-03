import "./works.scss";

const Works = () => {

    const works = [
        {img: "resources/img/works/pizza.png", alt: "pizza", descr: "React, redux", github: "https://github.com/Sorini92/pizza", site: "https://sorini92.github.io/pizza/"},
        {img: "resources/img/works/marvel.png", alt: "marvel", descr: "React", github: "https://github.com/Sorini92/marvel", site: "https://sorini92.github.io/marvel/"},
        {img: "resources/img/works/cripto.bmp", alt: "cripto", descr: "React", github: "https://github.com/Sorini92/cripto", site: "https://sorini92.github.io/transactions"},
        {img: "resources/img/works/employees.png", alt: "employees", descr: "React", github: "https://github.com/Sorini92/employees", site: "https://sorini92.github.io/employees/"},
        {img: "resources/img/works/heroadminpanel.png", alt: "heroadminpanel", descr: "React, Redux", github: "https://github.com/Sorini92/heroAdminPanelOnRTKQuery",},
        {img: "resources/img/works/customizator.png", alt: "customizator", descr: "HTML, CSS, JavaScript", github: "https://github.com/Sorini92/customizator", site: "https://sorini92.github.io/customizator/"},
        {img: "resources/img/works/bringitup.png", alt: "bringitup", descr: "HTML, CSS, JavaScript", github: "https://github.com/Sorini92/bringitup", site: "https://sorini92.github.io/bringitup"},
        {img: "resources/img/works/picture.png", alt: "sitepicture", descr: "HTML, CSS, JavaScript", github: "https://github.com/Sorini92/picture", site: "https://sorini92.github.io/picture/"},
        {img: "resources/img/works/irvaswindows.png", alt: "irvaswindows", descr: "HTML, CSS, JavaScript", github: "https://github.com/Sorini92/IrvasWindows", site: "https://sorini92.github.io/IrvasWindows/"},
        {img: "resources/img/works/food.png", alt: "food", descr: "HTML, CSS, JavaScript", github: "https://github.com/Sorini92/food", site: "https://sorini92.github.io/food/"},
        {img: "resources/img/works/glopt.png", alt: "glopt", descr: "HTML, CSS", github: "https://github.com/Sorini92/glopt", site: "https://sorini92.github.io/glopt/"},
        {img: "resources/img/works/pulse.png", alt: "pulse", descr: "HTML, CSS", github: "https://github.com/Sorini92/pulse", site: "https://sorini92.github.io/pulse/"},
        {img: "resources/img/works/uber.png", alt: "uber", descr: "HTML, CSS", github: "https://github.com/Sorini92/sorini92.github.io", site: "https://sorini92.github.io/"},
    ]

    const elements = works.map((item, i) => {
        return (
            <div key={i} className="works__item">
                <div className="works__item_front">
                    <img src={item.img} alt={item.alt} className="works__item_img"/>
                </div>
                <div className="works__item_back">
                    <div className="works__item_descr">{item.descr}</div>
                    <a href={item.github} className="works__item_github" target={"_blank"} rel="noreferrer">GitHub</a>
                    {item.site ? <a href={item.site} className="works__item_site" target={"_blank"} rel="noreferrer">Site</a> : null}
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="works uk-animation-scale-down">
                <div className="works__wrapper">
                    {elements}
                </div>
            </div>
        </>
    )
}

export default Works;