import React, { Component } from 'react';
import _ from 'lodash';

export default class Field extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isFocused: false,
            value: ''
        };
    }

    componentDidMount() {
        this.setState({ value: this.refs.field.value || '' });
    }

    _handleFocus() {
        this.setState({ isFocused: true });
    }

    _handleBlur() {
        this.setState({ isFocused: false });
    }

    _handleChange(value) {
        this.setState({ value });
        this.props.onChange && this.props.onChange(value);
    }

    getInput(baseClassName) {
        return (
            <input
                ref="field"
                className={`${baseClassName}__input`}
                type="text"
                value={this.state.value}
                onChange={e => this._handleChange(e.target.value)}
                onBlur={() => this._handleBlur()}
                onFocus={() => this._handleFocus()}
            />
        );
    }

    render() {
        const baseClassName = 'field';
        const classNames = _.compact([baseClassName, this.state.isFocused && `${baseClassName}_focused`, this.props.className]).join(' ');

        const placeholder = this.props.placeholder ?
            (<span className={`${baseClassName}__placeholder`}>{this.props.placeholder}</span>) :
            null;

        return (
            <label className={classNames}>
                {placeholder}
                {this.getInput(baseClassName)}
            </label>
        );
    }
}
