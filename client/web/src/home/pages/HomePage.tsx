import * as React from 'react';
import {
    Grid, Segment, Image, Button,
} from 'semantic-ui-react';

import './HomePage.css';
import SideBarComponent from '../components/SideBarComponent';
import { getUser } from '../../core/util/CacheUtil';
import { Link } from 'react-router-dom';
import { HOME, PROFILE } from '../../constants/routes';

export interface Props {
    name: string;
}

const userImage = require('../../resources/images/user_default.png');
const icon1 = require('../../resources/images/icon_1.png');
const icon2 = require('../../resources/images/icon_2.png');
const icon3 = require('../../resources/images/icon_3.png');
const icon4 = require('../../resources/images/icon_4.png');
const icon5 = require('../../resources/images/icon_5.png');
const icon6 = require('../../resources/images/icon_6.png');

export class HomePage extends React.Component<Props, {}> {

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

    renderProfileImage = (user?: any) => {
        if (user && user.profileImage) {
            return (
                <Image src={user.profileImage} avatar={true}/>
            );
        }

        return (
            <Image size="small" src={userImage} avatar={true}/>
        );
    }

    render() {
        const user = getUser();
        return (
            <SideBarComponent>
                <Grid container={true} divided={true} stackable={true}>
                    <Grid.Column>
                        <Segment>
                            {this.renderProfileImage(user)}
                            <div>{user.email}</div>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid columns={2} container={true} divided={true} stackable={true}>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>{this.renderButton(icon1, 'Perfil', PROFILE)}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>{this.renderButton(icon2, 'Crear Historia', HOME)}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>{this.renderButton(icon3, 'Inventario', HOME)}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>{this.renderButton(icon4, 'Agenda', HOME)}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>{this.renderButton(icon5, 'Historias Clínicas', HOME)}</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>{this.renderButton(icon6, 'Auxiliar', HOME)}</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </SideBarComponent>
        );
    }
}
