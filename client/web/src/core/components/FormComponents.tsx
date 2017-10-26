import * as React from 'react';
import { CheckboxProps, Form, FormInputProps } from 'semantic-ui-react';

export const Input = (props: FormInputProps) => {
    console.log(props);
    return (
        <Form.Input {...props}/>
    );
};

export const Checkbox = (props: CheckboxProps) => {
    console.log(props);
    return (
        <Form.Checkbox
            {...props.input}
            {...props}/>
    );
};