import * as React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';

import './LoginPage.css';
import {REMEMBER_PASSWORD, SIGN_UP} from '../../constants/routes';

const logo = require('../../resources/images/logo.png');


export interface Props {
    name: string;
}

export class LoginPage extends React.Component<Props, {}> {

    render() {
        return (
            <div className="Background">
                <Grid
                    textAlign='center'
                    style={{height: '100%'}}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Image src={logo} height={120} centered={true}/>
                        <Form size='large' className='attached fluid segment'>
                            <Segment stacked>

                                <Header as='h2' textAlign='center'>
                                    {' '} Inicia sesión
                                </Header>

                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Correo electrónico'
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Contraseña'
                                    type='password'
                                />
                                <Form.Checkbox inline label='Recordar mi sesión'/>
                                <Button primary fluid size='large'>Login</Button>

                                <Message>
                                    Olvidaste tu contraseña? <Link to={REMEMBER_PASSWORD}>Recordar ahora</Link>
                                </Message>
                            </Segment>
                        </Form>
                        <Message icon>
                            <Icon name='add user'/>
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
}
