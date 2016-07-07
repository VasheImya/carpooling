import React, { Component } from 'react';
import Field from './field';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class FieldDate extends Field {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment().toISOString()
        };
    }

    componentDidMount() {
        const value = this.refs.field.refs.input.refs.input.value;
        this.setState({ value: moment(value || undefined).toISOString() });
    }

    _handleChange(moment) {
        this.setState({ value: moment.toISOString() });
    }

    getInput(baseClassName) {
        const className = `${baseClassName}__input`;
        const now = moment();

        return (
            <div className={className}>
                <DatePicker
                    ref="field"
                    className={className}
                    onFocus={() => this._handleFocus()}
                    onBlur={() => this._handleBlur()}
                    onChange={(date) => this._handleChange(date)}
                    selected={moment(this.state.value)}
                    startDate={now}
                    minDate={now}
                    dateFormat="D MMMM YYYY"
                />
            </div>
        );
    }
}
