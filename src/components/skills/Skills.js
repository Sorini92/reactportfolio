import "./skills.scss";

const Skills = ({theme}) => {

    const skills = [
        {darkimg: "/resources/icons/skills/darkhtml5.svg", lightimg: "/resources/icons/skills/html5.svg", title: "HTML5", description: "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта"},
        {darkimg: "/resources/icons/skills/darkcss3.svg", lightimg: "/resources/icons/skills/css3.svg", title: "CSS3", description: "Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!"},
        {darkimg: "/resources/icons/skills/sass.svg", lightimg: "/resources/icons/skills/sass.svg", title: "Sass", description: "модуль, включенный в Haml. Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей."},
        {darkimg: "/resources/icons/skills/darkjs.svg", lightimg: "/resources/icons/skills/js.svg", title: "JavaScript", description: "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое"},
        {darkimg: "/resources/icons/skills/react.svg",lightimg: "/resources/icons/skills/react.svg", title: "React", description: "Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели"},
        {darkimg: "/resources/icons/skills/typescript.svg", lightimg: "/resources/icons/skills/typescript.svg", title: "TypeScript", description: "TypeScript — язык программирования, позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript"},
        {darkimg: "/resources/icons/skills/redux.svg",lightimg: "/resources/icons/skills/redux.svg", title: "Redux", description: "Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения."},
        {darkimg: "/resources/icons/skills/darknextjs.svg",lightimg: "/resources/icons/skills/nextjs.svg", title: "Nextjs", description: "Next.js — фреймворк предназначен для решения проблемы React.js, связанной с отрисовкой приложения на стороне сервера - SSR. Работает на сервере и в браузере."},
        {darkimg: "/resources/icons/skills/git.svg",lightimg: "/resources/icons/skills/git.svg", title: "Git", description: "Git — распределённая система контроля версий, которая даёт возможность разработчикам отслеживать изменения в файлах и работать над одним проектом совместно с коллегами."},
        {darkimg: "/resources/icons/skills/darkgithub.svg",lightimg: "/resources/icons/skills/github.svg", title: "GitHub", description: "GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Веб-сервис основан на системе контроля версий Git."},
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