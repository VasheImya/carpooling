import React from 'react';
import SearchForm from '../containers/search-form';

export default class AppView extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="promo wrapper">
                    <div className="promo__inner">
                        <div className="promo__big-text">Куда едем?</div>
                        <div className="promo__small-text">Сотни интересных мест ждут тебя</div>
                    </div>
                </div>
                <SearchForm />
            </div>
        );
    }
}
