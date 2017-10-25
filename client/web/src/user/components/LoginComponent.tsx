import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import './LoginComponent.css';
import { REMEMBER_PASSWORD, SIGN_UP } from '../../constants/routes';

const logo = require('../../resources/images/logo.png');

export interface Props {
    name: string;
    test?: string;
    loginCheck: (email: string, password: string, remember: boolean) => any;
}

export default function LoginComponent(props: Props) {
    return (
        <div className="Background">
            <Grid
                textAlign="center"
                style={{height: '100%'}}
                verticalAlign="middle"
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <Image src={logo} height={120} centered={true}/>
                    <Form size="large" className="attached fluid segment">
                        <Segment stacked={true}>

                            <Header as="h2" textAlign="center">
                                Inicia sesión
                            </Header>

                            <Form.Input
                                fluid={true}
                                icon="user"
                                iconPosition="left"
                                placeholder="Correo electrónico"
                            />
                            <Form.Input
                                fluid={true}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Contraseña"
                                type="password"
                            />
                            <Form.Checkbox inline={true} label="Recordar mi sesión"/>
                            <Button
                                primary={true}
                                fluid={true}
                                size="large"
                                onClick={() => props.loginCheck('aaa', 'aaa', true)}
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
}