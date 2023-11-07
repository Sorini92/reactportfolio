import "./education.scss";

const Education = ({theme}) => {

    return (
        <>
            <div className="education">
                <div className="education__wrapper">
                    <div className="education__column uk-animation-scale-up uk-transform-origin-top-center">
                        <h3 className={`title title_fz20 ${theme === "light" ? "education__column-title" : "education__column-darktitle"}`}>Освіта</h3>
                        <ul className="education__list">
                            <li className="education__list-item">
                                <div className="education__item">
                                    <div className="education__item-head">
                                        <div className="education__item-icon">
                                            {theme === "light" ? <img src={process.env.PUBLIC_URL + '/resources/icons/experience/university.svg'} alt="university"/> : <img src={process.env.PUBLIC_URL + '/resources/icons/experience/darkuniversity.svg'} alt="university"/>}
                                        </div>
                                        <h4 className={`${theme === "light" ? "education__item-title" : "education__item-darktitle"} title title_fz14`}>Национальний технічний университет України «Київский політехнічний інститут имені Ігоря Сікорського»</h4>
                                        <div className={theme === "light" ? `education__item-location` : "education__item-darklocation"}>Диплом бакалавра | Київ (2009-2013)</div>
                                    </div>
                                    <div className={theme === "light" ? "education__item-body" : "education__item-darkbody"}>
                                        <strong>Професійна кваліфікація:</strong><br/>
                                        Спеціаліст з розробки та тестування програмного забезпечення
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="education__column uk-animation-scale-up uk-transform-origin-top-center">
                        <h3 className={`title title_fz20 ${theme === "light" ? "education__column-title" : "education__column-darktitle"}`}>Курси</h3>
                        <ul className="education__list">
                            <li className="education__list-item">
                                <div className="education__item">
                                    <div className="education__item-head">
                                        <div className="education__item-icon">
                                            {theme === "light" ? <img src={process.env.PUBLIC_URL + "/resources/icons/experience/courses.svg"} alt="front-end"/> : <img src={process.env.PUBLIC_URL + "/resources/icons/experience/darkcourses.svg"} alt="front-end"/>}
                                        </div>
                                        <h4 className={`${theme === "light" ? "education__item-title" : "education__item-darktitle"} title title_fz14`}>Udemy</h4>
                                        <div className={theme === "light" ? `education__item-location` : "education__item-darklocation"}>Курси по Web-розробці </div>
                                    </div>
                                    <div className={theme === "light" ? "education__item-body" : "education__item-darkbody"}>
                                        Вивчав розмітку сайтів, каскадні тамблиці стилів, пожвавлення сайтів за допомогою JavaScript, написання веб-додатків за допомогою React та Redux.<br/>
                                        <strong>Сертифікати про закінчення:</strong>
                                        <ol className="education__item-body-list">
                                            <li>
                                                <div className="education__item-body-list-item">
                                                    <div>Web-розробник </div>
                                                    <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/webdev.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертифікат</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="education__item-body-list-item">
                                                    <div>Практичний JavaScript </div>
                                                    <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/practJS.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертифікат</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="education__item-body-list-item">
                                                    <div>Створення адміністративної панелі на React.js и PHP</div> 
                                                    <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/admin.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертифікат</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="education__item-body-list-item">
                                                    <div>Повний курс по JavaScript, React, Redux</div>
                                                    <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/fullcurse.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертифікат</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="education__item-body-list-item">
                                                    <div>Повний курс з сучасного TypeScript + React</div>
                                                    <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/typescriptsertificate.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертифікат</a>
                                                </div>
                                            </li>
                                        </ol>                                  
                                    </div>
                                </div>
                                <div className="education__item">
                                    <div className="education__item-head">
                                        <div className="education__item-icon">
                                            {theme === "light" ? <img src={process.env.PUBLIC_URL + "/resources/icons/experience/courses.svg"} alt="front-end"/> : <img src={process.env.PUBLIC_URL + "/resources/icons/experience/darkcourses.svg"} alt="front-end"/>}
                                        </div>
                                        <h4 className={`${theme === "light" ? "education__item-title" : "education__item-darktitle"} title title_fz14`}>MyTime</h4>
                                        <div className={theme === "light" ? `education__item-location` : "education__item-darklocation"}>Курси англійскої мови</div>
                                    </div>
                                    <div className={theme === "light" ? "education__item-body" : "education__item-darkbody"}>
                                        <div className="education__item-body-list-item">
                                            <div>На даний момент мій рівень англійської мови - Upper Intermediate(B2)</div>
                                            <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/english.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертифікат</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;