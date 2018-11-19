import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

export default class MySelect extends React.Component {
    componentDidMount(){
        console.log(this.props);
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    onChange(value, options){
        console.log(value, options)
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
                {/* <Select defaultValue="Neutral" value={userInput => (this.input = userInput)}> */}
                <Select onChange={this.onChange}>
                    <Option value="introvert">Introvert</Option>
                    <Option value="extrovert">Extrovert</Option>
                </Select>
                {/* <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={userInput => (this.input = userInput)}
                    placeholder={this.props.placeholder}
                /> */}
            </div>
        );
    }
}