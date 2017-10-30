import * as React from 'react';
import {
    Grid, Segment, Image, Header, Icon, Button, Sidebar, Menu,
} from 'semantic-ui-react';

import './HomePage.css';

export interface Props {
    name: string;
}

const logo = require('../../resources/images/logo_h.png');
const icon1 = require('../../resources/images/icon_1.png');
const icon2 = require('../../resources/images/icon_2.png');
const icon3 = require('../../resources/images/icon_3.png');
const icon4 = require('../../resources/images/icon_4.png');
const icon5 = require('../../resources/images/icon_5.png');
const icon6 = require('../../resources/images/icon_6.png');

export class HomePage extends React.Component<Props, { sidebarVisible: boolean }> {

    constructor(props: Props) {
        super(props);
        this.state = {sidebarVisible: false};
    }

    toggleSidebarVisibility() {
        this.setState({sidebarVisible: !this.state.sidebarVisible});
    }

    renderButton(icon: any, text: string) {
        return (
            <Button className="ButtonTransparent">
                <Image src={icon} centered={true}/>
                <span>{text}</span>
            </Button>
        );
    }

    renderSideBar() {
        const {sidebarVisible} = this.state;
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation="push"
                    width="wide"
                    direction="right"
                    visible={sidebarVisible}
                    icon="labeled"
                    vertical={true}
                    inverted={true}
                >
                    <Menu.Item name="home">
                        <Icon name="home"/>
                        Home
                    </Menu.Item>
                    <Menu.Item name="gamepad">
                        <Icon name="gamepad"/>
                        Games
                    </Menu.Item>
                    <Menu.Item name="camera">
                        <Icon name="camera"/>
                        Channels
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Header>
                        <Grid>
                            <Grid.Column computer={3} mobile={6}>
                                <Image src={logo} fluid={true}/>
                            </Grid.Column>
                            <Grid.Column width={10} mobile={7}/>
                            <Grid.Column width={3}>
                                <Button className="ButtonTransparent" onClick={() => this.toggleSidebarVisibility()}>
                                    <Icon className="SideBarIcon" name="sidebar" size="big"/>
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Header>
                    <Grid columns={2} container={true} divided={true} stackable={true}>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>{this.renderButton(icon1, 'Perfil')}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>{this.renderButton(icon2, 'Crear Historia')}</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>{this.renderButton(icon3, 'Inventario')}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>{this.renderButton(icon4, 'Agenda')}</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>{this.renderButton(icon5, 'Historias Clínicas')}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>{this.renderButton(icon6, 'Auxiliar')}</Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }

    render() {
        return (
            <div>
                {this.renderSideBar()}
            </div>
        );
    }

}
