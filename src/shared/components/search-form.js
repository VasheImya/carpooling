import React from 'react';
import Loader from './loader';

function SearchForm ({ isLoading }) {
    const spinner = isLoading ?
        (<Spinner className="trip-search__spinner" />) :
        null;

    return (
        <div className="trip-search">
            <div className="trip-search__inner wrapper">
                <div className="trip-search__form">
                    <label className="trip-search__field_place field">
                        <span className="field__placeholder">из</span>
                        <input className="field__input"/>
                    </label>
                    <label className="trip-search__field_place field">
                        <span className="field__placeholder">в</span>
                        <input className="field__input"/>
                    </label>
                    <label className="trip-search__field_date field">
                        <input className="field__input"/>
                    </label>
                    <label className="trip-search__field_person field">
                        <input className="field__input"/>
                    </label>
                </div>
                {spinner}
                <div className="trip-search__data">
                    <div className="stats trip-search__stats">
                        <div className="stats__item stats-item">
                            <div className="stats-item__number">5</div>
                            <div className="stats-item__text">водителей</div>
                        </div>
                        <div className="stats__item stats-item">
                            <div className="stats-item__number">23</div>
                            <div className="stats-item__text">похожих<br />направления</div>
                        </div>
                        <div className="stats__item stats-item">
                            <div className="stats-item__number">40</div>
                            <div className="stats-item__symbol">$</div>
                            <div className="stats-item__text">средняя<br />стоимость</div>
                        </div>
                        <div className="stats__item stats-item">
                            <div className="stats-item__number">4</div>
                            <div className="stats-item__symbol">+</div>
                            <div className="stats-item__text">комфорт</div>
                        </div>
                    </div>
                    <button className="trip-search__go-btn">Поехали!</button>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
