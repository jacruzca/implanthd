import * as React from 'react';
import { CheckboxProps, DropdownProps, Form, FormInputProps } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import * as  moment from 'moment';

export const Input = (props: FormInputProps) => {
    const {touched, error} = props.meta;
    return (
        <Form.Input {...props} error={touched && error}/>
    );
};

export const Checkbox = (props: CheckboxProps) => {
    const {touched, error} = props.meta;
    return (
        <Form.Checkbox
            error={touched && error}
            {...props.input}
            {...props}
        />
    );
};

export const Dropdown = (props: DropdownProps) => {
    const {touched, error} = props.meta;
    return (
        <Form.Dropdown
            error={touched && error}
            {...props}
            {...props.input}
            value={props.input.value}
            onChange={(param, data) => props.input.onChange(data.value)}
            placeholder={props.label}
        />
    );
};

export const Date = (props: any) => {
    const {touched, error} = props.meta;
    return (
        <DatePicker
            error={touched && error}
            {...props}
            {...props.input}
            dateForm="DD/MM/YYYY"
            selected={props.input.value ? moment(props.input.value) : null}
        />
    );
};