import React from 'react';
import { Select } from 'antd';

export default class TagSelect extends React.Component {
    componentDidMount(){
        console.log(this.props);
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    onChange(value){
        console.log(value)
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
                <Select mode="tags" tokenSeparators={[',']} onChange={value => this.onChange(value)} />
            </div>
        );
    }
}