import "./skills.scss";

const Skills = ({theme}) => {

    const skills = [
        {darkimg: "/resources/icons/skills/darkhtml5.svg", lightimg: "/resources/icons/skills/html5.svg", title: "HTML5", description: "Саме він створює каркас вашого сайту або програми, а п'ята версія дозволить мені створювати більш SEO-оптимізовану структуру вашого продукту"},
        {darkimg: "/resources/icons/skills/darkcss3.svg", lightimg: "/resources/icons/skills/css3.svg", title: "CSS3", description: "Ця мова стилів дозволяє мені створювати абсолютно будь-який зовнішній вигляд вашого сайту або програми. Все обмежується лише вашою фантазією!"},
        {darkimg: "/resources/icons/skills/sass.svg", lightimg: "/resources/icons/skills/sass.svg", title: "Sass", description: "Модуль, включений до Haml. Sass - це метамова на основі CSS, призначена для збільшення рівня абстракції CSS-коду та спрощення файлів каскадних таблиць стилів."},
        {darkimg: "/resources/icons/skills/darkjs.svg", lightimg: "/resources/icons/skills/js.svg", title: "JavaScript", description: "Ця мова програмування дозволяє оживити все, що завгодно: слайдери, вікна, підказки, вкладки, отримання даних від сервера та багато іншого"},
        {darkimg: "/resources/icons/skills/react.svg",lightimg: "/resources/icons/skills/react.svg", title: "React", description: "Ця бібліотека дозволяє створювати веб-додатки. Ми можемо створити максимально інтерактивний продукт саме під ваші цілі"},
        {darkimg: "/resources/icons/skills/typescript.svg", lightimg: "/resources/icons/skills/typescript.svg", title: "TypeScript", description: "TypeScript — мова програмування, що позиціонується як засіб розробки веб-додатків, що розширює можливості JavaScript"},
        {darkimg: "/resources/icons/skills/redux.svg",lightimg: "/resources/icons/skills/redux.svg", title: "Redux", description: "Redux — бібліотека для JavaScript з відкритим кодом, призначена для керування станом програми."},
        {darkimg: "/resources/icons/skills/darknextjs.svg",lightimg: "/resources/icons/skills/nextjs.svg", title: "Nextjs", description: "Next.js - фреймворк призначений для вирішення проблеми React.js, пов'язаної з малюванням програми на стороні сервера - SSR. Працює на сервері та в браузері."},
        {darkimg: "/resources/icons/skills/git.svg",lightimg: "/resources/icons/skills/git.svg", title: "Git", description: "Git – розподілена система контролю версій, яка дає можливість розробникам відстежувати зміни у файлах та працювати над одним проектом спільно з колегами."},
        {darkimg: "/resources/icons/skills/darkgithub.svg",lightimg: "/resources/icons/skills/github.svg", title: "GitHub", description: "GitHub - найбільший веб-сервіс для хостингу IT-проектів та їхньої спільної розробки. Веб-сервіс базується на системі контролю версій Git."},
    ]

    let prefix = theme === "light" ? "skills" : "darkskills";

    const elements = skills.map((item, i) => {
        return (
            <div key={i} className={`${prefix}__item uk-animation-scale-up uk-transform-origin-top-center`}>
                <div className={`${prefix}__logo`}>
                    {theme === "light" ? <img src={process.env.PUBLIC_URL + item.lightimg} alt={item.title}/> : <img src={process.env.PUBLIC_URL + item.darkimg} alt={item.title}/>}
                </div>
                <h3 className={`${prefix}__title title_fz14`}>{item.title}</h3>
                <div className={`${prefix}__descr`}>{item.description}</div>
            </div>
        )
    })

    return (
        <>
            <div className={`${prefix}`}>
                <div className={`${prefix}__wrapper`}>
                    {elements}
                </div>
            </div>
        </>
    )
}

export default Skills;