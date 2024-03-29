import * as React from 'react';
import * as _ from 'lodash';
import {
    Grid, Segment, Image, Button, Header, Message,
} from 'semantic-ui-react';

import './HomePage.css';
import SideBarComponent from '../components/SideBarComponent';
import { getUser } from '../../core/util/CacheUtil';
import { Link } from 'react-router-dom';
import { EDIT_PROFILE, HOME, LOGIN, PROFILE } from '../../constants/routes';
import { Redirect } from 'react-router';

export interface Props {
    name: string;
    history: any;
}

const userImage = require('../../resources/images/user_default.png');
const icon1 = require('../../resources/images/icon_1.png');
const icon2 = require('../../resources/images/icon_2.png');
const icon3 = require('../../resources/images/icon_3.png');
const icon4 = require('../../resources/images/icon_4.png');
const icon5 = require('../../resources/images/icon_5.png');
const icon6 = require('../../resources/images/icon_6.png');

export class HomePage extends React.Component<Props, {}> {

    shownProfileAlert: boolean;

    renderButton(icon: any, text: string, link: string) {
        return (
            <Link to={link}>
                <Button className="ButtonTransparent">
                    <Image src={icon} centered={true}/>
                    <span>{text}</span>
                </Button>
            </Link>
        );
    }

    renderProfileAlert = (user?: any) => {
        if (user && _.size(user) < 21 && !this.shownProfileAlert) {
            return (
                <Grid.Column>
                    <Message
                        info={true}
                        onDismiss={() => {
                            this.shownProfileAlert = true;
                            this.forceUpdate();
                        }}
                    >
                        <Message.Header>¡Alerta!</Message.Header>
                        <p><Link to={EDIT_PROFILE}>Debes completar tu perfil</Link></p>
                    </Message>
                </Grid.Column>
            );
        }

        return <div/>;
    }

    renderMembershipAlert = (user?: any) => {
        return <div/>;
    }

    renderProfileImage = (user?: any) => {
        if (user && user.profileImage) {
            return (
                <Image size="medium" src={user.profileImage} avatar={true}/>
            );
        }

        return (
            <Image size="small" src={userImage} avatar={true}/>
        );
    }

    render() {
        const user = getUser();

        if (!user) {
            return (
                <Redirect to={LOGIN}/>
            );
        }

        return (
            <SideBarComponent history={this.props.history}>
                <Grid columns={3} container={true} stackable={true}>
                    {this.renderProfileAlert(user)}
                    {this.renderMembershipAlert(user)}
                </Grid>
                <Grid container={true} divided={true} stackable={true}>
                    <Grid.Column>
                        <Segment textAlign="center">
                            {this.renderProfileImage(user)}
                            <Header as="h3">{user && user.firstName} {user && user.lastName}</Header>
                            <Header as="h4">{user && !user.firstName && user.email}</Header>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid columns={2} container={true} divided={true} stackable={true}>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment textAlign="center">{this.renderButton(icon1, 'Perfil', PROFILE)}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign="center">{this.renderButton(icon2, 'Crear Historia', HOME)}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment textAlign="center">{this.renderButton(icon3, 'Inventario', HOME)}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign="center">{this.renderButton(icon4, 'Agenda', HOME)}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment textAlign="center">{this.renderButton(icon5, 'Historias Clínicas', HOME)}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign="center">{this.renderButton(icon6, 'Auxiliar', HOME)}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </SideBarComponent>
        );
    }
}
