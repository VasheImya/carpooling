import React, { Component } from 'react';
import Loader from './loader';
import Field from './field';
import FieldPlaces from './field_places';
import FieldDate from './field_date';
import FieldSelect from './field_select';

import _ from 'lodash';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class SearchForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: false,
            stats: null
        };
    }

    fetchStats() {
        this.setState({
            isLoading: true,
            stats: null
        });

        fetch('/cars')
            .then(res => {
                return res.json();
            })
            .then(stats => {
                this.setState({
                    isLoading: false,
                    stats: stats
                });
            })
            .catch(() => this.setState({ isLoading: false }));
    }

    mapStatsToValues(stats) {
        const fields = [
            { from: 'cars', texts: {1: 'водитель', 2: 'водителя', 5: 'водителей'} },
            { from: 'routes', texts: {1: (<span>похожее<br />направление</span>), 2: (<span>похожих<br />направления</span>), 5: (<span>похожих<br />направление</span>)} },
            { from: 'price', symbol: '$', texts: {1: (<span>средняя<br />стоимость</span>), 2: (<span>средняя<br />стоимость</span>), 5: (<span>средняя<br />стоимость</span>)} },
            { from: 'quality', symbol: '+', texts: {1: 'комфорт', 2: 'комфорт', 5: 'комфорт'} }
        ];

        return _.compact(fields.map(field => {
            const prop = field.from;

            if (!stats || !stats[prop]) {
                return null;
            }

            const stat = stats[prop];

            let count = stat % 10 || 5;

            if (count > 1 && count < 5) {
                count = 2;
            }

            if (count > 5) {
                count = 5;
            }

            return {
                value: stat,
                text: field.texts[count],
                symbol: field.symbol
            };
        }));
    }

    getStatItem(stat) {
        const symbol = stat.symbol ?
            (<div className="stats-item__symbol">{stat.symbol}</div>) :
            null;

        return (
            <div className="stats__item stats-item">
                <div className="stats-item__number">{stat.value}</div>
                {symbol}
                <div className="stats-item__text">{stat.text}</div>
            </div>
        );
    }

    render() {
        const spinner = this.state.isLoading ?
            (<Loader className="trip-search__spinner" />) :
            null;

        const stats = this.mapStatsToValues(this.state.stats || null);
        const statsItems = stats.map(stat => this.getStatItem(stat));

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
                            {statsItems}
                        </div>
                        <button onClick={() => this.fetchStats()} className="trip-search__go-btn">Поехали!</button>
                    </div>
                </div>
            </div>
        );
    }
}
