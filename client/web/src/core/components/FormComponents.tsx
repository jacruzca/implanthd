import * as React from 'react';
import { CheckboxProps, Form, FormInputProps } from 'semantic-ui-react';

export const Input = (props: FormInputProps) => {
    const {error} = props.meta;
    return (
        <Form.Input {...props} error={error}/>
    );
};

export const Checkbox = (props: CheckboxProps) => {
    const {error} = props.meta;
    return (
        <Form.Checkbox
            error={error}
            {...props.input}
            {...props}
        />
    );
};