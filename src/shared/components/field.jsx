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
        this.setState({ value: this.refs.field.getDOMNode().value || 0 });
    }

    onFocus() {
        this.setState({ isFocused: true });
    }

    onBlur() {
        this.setState({ isFocused: false });
    }

    onChange(value) {
        console.log(value);
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
                onChange={value => this.onChange(value)}
                onBlur={() => this.onBlur()}
                onFocus={() => this.onFocus()}
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
