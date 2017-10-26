import * as React from 'react';
import { CheckboxProps, Form, FormInputProps } from 'semantic-ui-react';

export const Input = (props: FormInputProps) => {
    return (
        <Form.Input {...props}/>
    );
};

export const Checkbox = (props: CheckboxProps) => {
    return (
        <Form.Checkbox
            {...props.input}
            {...props}
        />
    );
};