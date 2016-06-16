import React from 'react';

export default class AppView extends React.Component {
    render() {
        return (
            <div id="app-view" className="main">
                <div className="header">
                    <div className="header__logo">
                        <a href="#" className="logo"></a>
                    </div>
                    <div className="header__side">
                        <div className="header__left-side">
                            <span className="header__menu-item"><a href="#">Самое интересное</a></span>
                        </div>
                        <div className="header__right-side">
                            <ul className="header__menu">
                                <li className="header__menu-item"><a href="#">Сообщения</a></li>
                                <li className="header__menu-item"><a href="#">Мои поездки</a></li>
                                <li className="header__menu-item"><a href="#">Помощь</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__profile">
                        <span className="header__avatar"></span>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
