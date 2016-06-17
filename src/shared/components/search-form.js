import React from 'react';
import Loader from './loader';
import Field from './field';
import FieldPlaces from './field_places';
import FieldDate from './field_date';
import FieldSelect from './field_select';

function SearchForm ({ isLoading }) {
    const spinner = isLoading ?
        (<Spinner className="trip-search__spinner" />) :
        null;

    return (
        <div className="trip-search">
            <div className="trip-search__inner wrapper">
                <div className="trip-search__form">
                    <FieldPlaces
                        placeholder="из"
                        className="trip-search__field_place"
                    />
                    <FieldPlaces
                        placeholder="в"
                        className="trip-search__field_place"
                    />
                    <FieldDate className="trip-search__field_date" />
                    <FieldSelect
                        className="trip-search__field_person"
                        options={[
                            { value: 1, label: 'Один' },
                            { value: 2, label: 'Вдвоем' },
                            { value: 3, label: 'Втроем' },
                            { value: 4, label: 'Вчетвером' }
                        ]}
                    />
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
