import * as React from 'react';
import { Sidebar, Segment, Menu, Icon, Header, Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { HOME, PROFILE } from '../../constants/routes';

interface Props {

}

const logo = require('../../resources/images/logo_h.png');
const icon1 = require('../../resources/images/icon_1.png');
const icon2 = require('../../resources/images/icon_2.png');
const icon3 = require('../../resources/images/icon_3.png');
const icon4 = require('../../resources/images/icon_4.png');
const icon5 = require('../../resources/images/icon_5.png');
const icon6 = require('../../resources/images/icon_6.png');

class SideBarComponent extends React.Component<Props, { sidebarVisible: boolean }> {

    constructor(props: Props) {
        super(props);
        this.state = {sidebarVisible: false};
    }

    toggleSidebarVisibility() {
        this.setState({sidebarVisible: !this.state.sidebarVisible});
    }

    render() {
        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation="push"
                    width="wide"
                    direction="right"
                    visible={this.state.sidebarVisible}
                    icon="labeled"
                    vertical={true}
                    inverted={true}
                >
                    <Menu.Item name="home">
                        <Link to={HOME}>
                            <Icon name="home" size="big"/>
                            <div>Inicio</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name="profile">
                        <Link to={PROFILE}>
                            <Image src={icon1} centered={true} size="tiny"/>
                            <div>Perfil</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name="create-history">
                        <Link to={PROFILE}>
                            <Image src={icon2} centered={true} size="tiny"/>
                            <div>Crear Historia</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name="inventory">
                        <Link to={PROFILE}>
                            <Image src={icon3} centered={true} size="tiny"/>
                            <div>Inventario</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name="agenda">
                        <Link to={PROFILE}>
                            <Image src={icon4} centered={true} size="tiny"/>
                            <div>Agenda</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name="histories">
                        <Link to={PROFILE}>
                            <Image src={icon5} centered={true} size="tiny"/>
                            <div>Historias Clínicas</div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item name="aux">
                        <Link to={PROFILE}>
                            <Image src={icon6} centered={true} size="tiny"/>
                            <div>Auxiliares</div>
                        </Link>
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
                    {this.props.children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default SideBarComponent;