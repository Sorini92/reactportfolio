import "./education.scss";

const Education = ({theme}) => {

    return (
        <>
            <div className="education">
                <div className="education__wrapper">
                    <div className="education__column uk-animation-scale-up uk-transform-origin-top-center">
                        <h3 className={`title title_fz20 ${theme === "light" ? "education__column-title" : "education__column-darktitle"}`}>Образование</h3>
                        <ul className="education__list">
                            <li className="education__list-item">
                                <div className="education__item">
                                    <div className="education__item-head">
                                        <div className="education__item-icon">
                                            {theme === "light" ? <img src={process.env.PUBLIC_URL + '/resources/icons/experience/university.svg'} alt="university"/> : <img src={process.env.PUBLIC_URL + '/resources/icons/experience/darkuniversity.svg'} alt="university"/>}
                                        </div>
                                        <h4 className={`${theme === "light" ? "education__item-title" : "education__item-darktitle"} title title_fz14`}>Национальный технический университет Украины «Киевский политехнический институт имени Игоря Сикорского»</h4>
                                        <div className={theme === "light" ? `education__item-location` : "education__item-darklocation"}>Диплом бакалавра | Киев (2009-2013)</div>
                                    </div>
                                    <div className={theme === "light" ? "education__item-body" : "education__item-darkbody"}>
                                        <strong>Профессиональная квалификация:</strong><br/>
                                        Cпециалист с разработки и тестирования программного обеспечения
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="education__column uk-animation-scale-up uk-transform-origin-top-center">
                        <h3 className={`title title_fz20 ${theme === "light" ? "education__column-title" : "education__column-darktitle"}`}>Курсы</h3>
                        <ul className="education__list">
                            <li className="education__list-item">
                                <div className="education__item">
                                    <div className="education__item-head">
                                        <div className="education__item-icon">
                                            {theme === "light" ? <img src={process.env.PUBLIC_URL + "/resources/icons/experience/courses.svg"} alt="front-end"/> : <img src={process.env.PUBLIC_URL + "/resources/icons/experience/darkcourses.svg"} alt="front-end"/>}
                                        </div>
                                        <h4 className={`${theme === "light" ? "education__item-title" : "education__item-darktitle"} title title_fz14`}>Udemy</h4>
                                        <div className={theme === "light" ? `education__item-location` : "education__item-darklocation"}>Курсы по Web-разработке </div>
                                    </div>
                                    <div className={theme === "light" ? "education__item-body" : "education__item-darkbody"}>
                                        Изучал разметку сайтов, каскадные тамблицы стилей, оживление сайтов с помощью JavaScript, написание веб-приложений с помощью React и Redux.<br/>
                                        <strong>Сертификаты об окончании:</strong>
                                        <ol className="education__item-body-list">
                                            <li>Web-разработчик 
                                                <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/webdev.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертификат</a>
                                            </li>
                                            <li>Практический JavaScript 
                                                <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/practJS.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертификат</a>
                                            </li>
                                            <li>Создание административной панели на React.js и PHP 
                                                <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/admin.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертификат</a>
                                            </li>
                                            <li>Полный курс по JavaScript, React, Redux 
                                                <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/fullcurse.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертификат</a>
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
                                        <div className={theme === "light" ? `education__item-location` : "education__item-darklocation"}>Курсы английского языка</div>
                                    </div>
                                    <div className={theme === "light" ? "education__item-body" : "education__item-darkbody"}>
                                        На данный момент мой уровень английского языка -<br/> Upper Intermediate(B2)
                                        <a href={process.env.PUBLIC_URL + "/resources/img/sertificates/english.jpg"} className="education__item-body-btn" target="_blank" rel="noreferrer">Сертификат</a>
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