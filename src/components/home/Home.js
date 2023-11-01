import "./home.scss";

const Home = ({theme}) => {

    let prefix = theme === "light" ? "home" : "darkhome";

    return (
        <>
             <div className={prefix}>
                <div className={`${prefix}__left uk-animation-slide-left-medium`}>
                    <img className={`${prefix}__left-img`} src={process.env.PUBLIC_URL + "/resources/img/pc.png"} alt="developer"/>
                </div>
                <div className={`${prefix}__right uk-animation-slide-right-medium`}>
                    <div className={`${prefix}__descr`}>
                        <div className={`${prefix}__subtitle`}>Меня зовут Артем</div>
                        <div className="divider"></div>
                        <div className={`${prefix}__text`}>
                            Привет, я начинающий фронтенд-разработчик, который строит новую карьеру на том, что мне действительно нравится. В течение года я оттачивал свои навыки веб-разработчика, изучая, как создавать веб-приложения с помощью HTML, CSS, JavaScript, TypeScript, React, Redux.
                        </div>
                    </div>
                    <div className={`${prefix}__resumelink title_fz20`}>
                        <div>Мое резюме:</div>
                        <a href={process.env.PUBLIC_URL + "resources/img/CV_BedlinkyiArtem_Frontend.pdf"} className={`${prefix}__btn`} download="">Скачать резюме</a>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;