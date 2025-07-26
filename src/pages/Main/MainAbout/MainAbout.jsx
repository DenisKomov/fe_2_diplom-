import React from "react";
import "./MainAbout.css";

function MainAbout() {
    return (
        <section className="main-about about" id="about">
            <div className="container">
                <header className="about__content-wrapper">
                    <h2 className="about__title">О нас</h2>
                    <div className="about__content">
                        <p className="about__paragraph">
                            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.
                        </p>
                        <p className="about__paragraph">
                            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.
                        </p>
                        <p className="about__paragraph">
                            Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                        </p>
                    </div>
                </header>
            </div>
        </section>
    );
}

export default MainAbout;