import React, { Component } from 'react';
import Field from './field';
import Autocomplete from 'react-google-autocomplete';

export default class FieldPlaces extends Field {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.setState({ value: this.refs.field.refs.input.value || '' });
    }

    getInput(baseClassName) {
        const className = `${baseClassName}__input`;

        return (
            <div className={className}>
                <Autocomplete
                    ref="field"
                    onPlaceSelected={place => this._handleChange(place.place_id)}
                    className={className}
                    onFocus={() => this._handleFocus()}
                    onBlur={() => this._handleBlur()}
                />
            </div>
        );
    }
}
