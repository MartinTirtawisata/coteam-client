import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

export default class DropDownSelect extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    onChange(value){
        this.props.input.onChange(value);
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }
        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <Select defaultValue="Neutral" onChange={value => this.onChange(value)}>
                    <Option value="Introvert">Introvert</Option>
                    <Option value="Extrovert">Extrovert</Option>
                </Select>
            </div>
        );
    }
}