import React, { Component } from 'react';
import Field from './field';
import Select from 'react-select';

export default class FieldSelect extends Field {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: 1
        };
    }

    componentDidMount() {
        const focusedOption = this.refs.field.state.focusedOption;
        this.setState({ value: focusedOption && focusedOption.value || 1 });
    }

    _handleChange(option) {
        this.setState({ value: option.value })
    }

    getInput(baseClassName) {
        const className = `${baseClassName}__input`;

        return (
            <div className={className}>
                <Select
                    ref="field"
                    options={this.props.options}
                    onChange={value => this._handleChange(value)}
                    searchable={false}
                    value={this.state.value}
                />
            </div>
        );
    }
}
