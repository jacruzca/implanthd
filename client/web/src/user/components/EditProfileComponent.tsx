import * as React from 'react';
import { Grid, Segment, Form, Header, Button } from 'semantic-ui-react';
import { Checkbox, Date, Dropdown, Input } from '../../core/components/FormComponents';

import './EditProfileComponent.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'redux-form';

interface ProfileComponentProps {
    errors?: Array<string>; // global errors of the form
    handleSubmit: (values: any) => void;
    isLoading?: boolean;
    errorMessage?: string;
    user?: any;
    isProfessional?: boolean;
    isProfileLoading?: boolean;
}

const EditProfileComponent: React.ComponentType<ProfileComponentProps> = (props) => {

    const {user, isProfessional} = props;

    console.log(user);

    return (
        <Grid container={true} stackable={true}>
            <Grid.Column>
                <Form onSubmit={props.handleSubmit}>
                    <Segment stacked={true}>
                        <Header as="h2" textAlign="center">
                            Editar Perfil ({user && user.email})
                        </Header>

                        <Form.Group widths="equal">
                            <Form.Field>
                                <label>Nombre</label>
                                <Field
                                    name="firstName"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Nombre',
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Apellidos</label>
                                <Field
                                    name="lastName"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Apellidos',
                                    }}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Field>
                            <label>Género</label>
                            <Field
                                name="gender"
                                component={Dropdown}
                                {...{
                                    fluid: true,
                                    basic: true,
                                    defaultValue: user && user.gender ? user.gender : 'Masculino',
                                    placeholder: 'Género',
                                    selection: true,
                                    options: [
                                        {key: 'Masculino', value: 'Masculino', text: 'Masculino'},
                                        {key: 'Femenino', value: 'Femenino', text: 'Femenino'},
                                    ],
                                }}
                            />
                        </Form.Field>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <label>Dirección</label>
                                <Field
                                    name="address"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Dirección',
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Ciudad</label>
                                <Field
                                    name="city"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Ciudad',
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>País</label>
                                <Field
                                    name="country"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'País',
                                    }}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <label>Teléfono Fijo</label>
                                <Field
                                    name="phone"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Teléfono Fijo',
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Teléfono Móvil</label>
                                <Field
                                    name="mobile"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Teléfono Móvil',
                                    }}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <label>Tipo de Documento</label>
                                <Field
                                    name="documentType"
                                    component={Dropdown}
                                    {...{
                                        fluid: true,
                                        basic: true,
                                        selection: true,
                                        options: [
                                            {key: 'CC', value: 'CC', text: 'CC'},
                                            {
                                                key: 'Cédula de extranjería',
                                                value: 'Cédula de extranjería',
                                                text: 'Cédula de extranjería',
                                            },
                                            {key: 'NIT', value: 'NIT', text: 'NIT'},
                                        ],
                                        placeholder: 'Tipo de documento',
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Número de documento</label>
                                <Field
                                    name="documentNumber"
                                    component={Input}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Número de documento',
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Fecha de Nacimiento</label>
                                <Field
                                    name="birthdate"
                                    component={Date}
                                    {...{
                                        fluid: true,
                                        placeholder: 'Fecha de Nacimiento',
                                        showYearDropdown: true,
                                        locale: 'es-ES',
                                        dateFormatCalendar: 'MMMM',
                                    }}
                                />
                            </Form.Field>
                        </Form.Group>
                        <Segment>
                            <Header>Estudios de Pregrado</Header>
                            <Form.Field>
                                <Field
                                    name="isProfessional"
                                    component={Checkbox}
                                    {...{
                                        inline: true,
                                        toggle: true,
                                        label: 'Soy Profesional titulado',
                                    }}
                                />
                            </Form.Field>
                            {isProfessional && <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Título</label>
                                    <Field
                                        name="title"
                                        component={Input}
                                        {...{
                                            fluid: true,
                                            placeholder: 'Título',
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Institución Educativa</label>
                                    <Field
                                        name="institution"
                                        component={Input}
                                        {...{
                                            fluid: true,
                                            placeholder: 'Institución Educativa',
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Fecha de grado</label>
                                    <Field
                                        name="titleDate"
                                        component={Date}
                                        {...{
                                            fluid: true,
                                            placeholder: 'Fecha de grado',
                                            showYearDropdown: true,
                                            locale: 'es-ES',
                                            dateFormatCalendar: 'MMMM',
                                        }}
                                    />
                                </Form.Field>
                            </Form.Group>}
                        </Segment>
                        <Segment>
                            <Header>Estudios de Postgrado</Header>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Título</label>
                                    <Field
                                        name="postgraduateTitle"
                                        component={Input}
                                        {...{
                                            fluid: true,
                                            placeholder: 'Título',
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Institución Educativa</label>
                                    <Field
                                        name="postgraduateInstitution"
                                        component={Input}
                                        {...{
                                            fluid: true,
                                            placeholder: 'Institución Educativa',
                                        }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Fecha de grado</label>
                                    <Field
                                        name="postgraduateTitleDate"
                                        component={Date}
                                        {...{
                                            fluid: true,
                                            placeholder: 'Fecha de grado',
                                            showYearDropdown: true,
                                            locale: 'es-ES',
                                            dateFormatCalendar: 'MMMM',
                                        }}
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Segment>
                        <Button
                            primary={true}
                            fluid={true}
                            type="submit"
                            size="large"
                            loading={props.isProfileLoading}
                            disabled={props.isProfileLoading}
                        >
                            Actualizar Perfil
                        </Button>

                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default EditProfileComponent;