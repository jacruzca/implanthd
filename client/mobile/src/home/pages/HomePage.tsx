import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { StyleSheet, Text, Image, View, Dimensions, Modal, AsyncStorage } from 'react-native';
import {
    Grid, Content, Header, Col, Container, Row, Button, Icon, Title, Body,
} from 'native-base';
import { HOME, LOGIN, PROFILE } from '../../constants/routes';
import { PRIMARY_COLOR } from '../../constants/colors';
import { TOKEN_COOKIE, USER_COOKIE } from '../../constants/index';
import { LoginAction, logout } from '../../business/user/actions/LoginActions';

const icon1 = require('../../resources/images/icon_1.png');
const icon2 = require('../../resources/images/icon_2.png');
const icon3 = require('../../resources/images/icon_3.png');
const icon4 = require('../../resources/images/icon_4.png');
const icon5 = require('../../resources/images/icon_5.png');
const icon6 = require('../../resources/images/icon_6.png');


interface Props {
    history: any;
}

interface HomePageDispatchProps {
    logout: () => any;
}

class HomePage extends React.Component<Props & HomePageDispatchProps, { signOutModalVisible: boolean }> {

    constructor(props: Props & HomePageDispatchProps) {
        super(props);
        this.state = {signOutModalVisible: false};
    }

    async componentDidMount() {
        const savedUserStr = await AsyncStorage.getItem(USER_COOKIE);
        const savedToken = await AsyncStorage.getItem(TOKEN_COOKIE);

        if (!savedUserStr || !savedToken) {
            this.props.history.replace(LOGIN);
        }
    }

    displayButton = (icon: any, text: string, imageSize: number, link: string) => {
        return (
            <Button transparent style={{width: imageSize, height: imageSize}}
                    onPress={() => this.props.history.push(link)}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={icon} style={{width: imageSize}}/>
                    <Text style={{textAlign: 'center', color: PRIMARY_COLOR}}>{text}</Text>
                </View>
            </Button>
        );
    };

    setSignOutModalVisible(visible) {
        this.setState({signOutModalVisible: visible});
    }

    async signOut() {
        this.props.logout();
        await AsyncStorage.removeItem(TOKEN_COOKIE);
        await AsyncStorage.removeItem(USER_COOKIE);
        this.props.history.replace(LOGIN);
        this.setSignOutModalVisible(false)
    }

    displaySignOutModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.signOutModalVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.")
                }}
            >

                <Container>
                    <Header>
                        <Body>
                        <Title>¿Seguro que quieres cerrar tu sesión?</Title>
                        </Body>
                    </Header>
                    <Content>
                        <Button light style={{marginBottom: 10}} block onPress={() => {
                            this.signOut();
                        }}>
                            <Text>Sí</Text>
                        </Button>

                        <Button light block onPress={() => {
                            this.setSignOutModalVisible(!this.state.signOutModalVisible)
                        }}>
                            <Text>No</Text>
                        </Button>
                    </Content>
                </Container>
            </Modal>
        );
    };

    render() {

        const {width} = Dimensions.get('window');
        const imageSize = (width / 2);
        const columnSize = (width / 2);

        return (
            <Container>
                <Header>
                    <Body>
                    <Title>ImplantHD</Title>
                    </Body>
                </Header>
                <Content style={{paddingTop: 20, paddingBottom: 20}}>
                    <Grid>
                        <Row style={styles.row}>
                            <Col style={StyleSheet.flatten([styles.column, {height: columnSize, width: columnSize,}])}>
                                {this.displayButton(icon1, 'Perfil', imageSize, PROFILE)}
                            </Col>
                            <Col style={StyleSheet.flatten([styles.column, {height: columnSize, width: columnSize,}])}>
                                {this.displayButton(icon2, 'Crear Historia', imageSize, HOME)}
                            </Col>
                        </Row>
                        <Row style={styles.row}>
                            <Col style={[styles.column, {height: columnSize, width: columnSize}]}>
                                {this.displayButton(icon3, 'Inventario', imageSize, HOME)}
                            </Col>
                            <Col style={[styles.column, {height: columnSize, width: columnSize}]}>
                                {this.displayButton(icon4, 'Agenda', imageSize, HOME)}
                            </Col>
                        </Row>
                        <Row style={styles.row}>
                            <Col style={[styles.column, {height: columnSize, width: columnSize}]}>
                                {this.displayButton(icon5, 'Historias Clínicas', imageSize, HOME)}
                            </Col>
                            <Col style={[styles.column, {height: columnSize}]}>
                                {this.displayButton(icon6, 'Auxiliar', imageSize, HOME)}
                            </Col>
                        </Row>
                        <Row style={styles.row}>
                            <Col style={{padding: 5, marginBottom: 20}}>
                                <Button block style={{backgroundColor: PRIMARY_COLOR}} onPress={() => {
                                    this.setSignOutModalVisible(true);
                                }}>
                                    <Text style={{color: 'white'}}>Cerrar sesión</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                    {this.displaySignOutModal()}
                </Content>
            </Container>
        );
    }

}

function mapDispatchToProps(dispatch: Dispatch<LoginAction>): HomePageDispatchProps {
    return {
        logout: () =>
            dispatch(logout()),
    };
}

export default connect(null, mapDispatchToProps)(HomePage as any);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});