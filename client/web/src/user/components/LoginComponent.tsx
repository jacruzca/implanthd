import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { Icon, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import './LoginComponent.css';
import { REMEMBER_PASSWORD, SIGN_UP } from '../../constants/routes';
import { Checkbox, Input } from '../../core/components/FormComponents';

const logo = require('../../resources/images/logo.png');

interface LoginComponentProps {
    email?: string;
    password?: string;
    rememberPassword?: boolean;
    handleSubmit: (values: any) => void;
}

const LoginComponent: React.ComponentType<LoginComponentProps> = (props) => {
    return (
        <div className="Background">
            <Grid
                textAlign="center"
                style={{height: '100%'}}
                verticalAlign="middle"
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <Image src={logo} height={120} centered={true}/>
                    <Form size="large" className="attached fluid segment" onSubmit={props.handleSubmit}>
                        <Segment stacked={true}>

                            <Header as="h2" textAlign="center">
                                Inicia sesión
                            </Header>

                            <Field
                                name="email"
                                component={Input}
                                {...{
                                    fluid: true,
                                    placeholder: 'Correo electrónico',
                                    icon: 'user',
                                    iconPosition: 'left',
                                }}
                            />

                            <Field
                                name="password"
                                component={Input}
                                {...{
                                    fluid: true,
                                    placeholder: 'Contraseña',
                                    icon: 'lock',
                                    type: 'password',
                                    iconPosition: 'left',
                                }}
                            />

                            <Field
                                name="rememberPassword"
                                component={Checkbox}
                                {...{
                                    inline: true,
                                    label: 'Recordar mi sesión',
                                }}
                            />

                            <Button
                                primary={true}
                                fluid={true}
                                type="submit"
                                size="large"
                            >
                                Login
                            </Button>

                            <Message>
                                Olvidaste tu contraseña? <Link to={REMEMBER_PASSWORD}>Recordar ahora</Link>
                            </Message>
                        </Segment>
                    </Form>
                    <Message icon={true}>
                        <Icon name="add user"/>
                        <Message.Content>
                            <Message.Header>¿No tienes una cuenta?</Message.Header>
                            <Link to={SIGN_UP}>Crear cuenta</Link>
                        </Message.Content>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default LoginComponent;