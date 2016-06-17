import React, { Component } from 'react';
import Field from './field';
import Autocomplete from 'react-google-autocomplete';

export default class FieldPlaces extends Field {
    constructor(props, context) {
        super(props, context);
    }

    getInput(baseClassName) {
        const className = `${baseClassName}__input`;

        return (
            <div className={className}>
                <Autocomplete
                    ref="field"
                    onPlaceSelected={place => this.onChange(place)}
                    className={className}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                />
            </div>
        );
    }
}
