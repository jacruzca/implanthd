import * as React from 'react';
import { CheckboxProps, Form, FormInputProps } from 'semantic-ui-react';

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