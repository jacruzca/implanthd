import * as React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {
    Drawer,
    Body,
    Title,
    Right,
    Container,
    Header,
    Left,
    Button,
    Footer,
    Icon,
    Content,
    FooterTab,
    List,
    ListItem,
    Badge,
} from 'native-base';
import { Link } from 'react-router-native';
import { LOGIN } from '../../constants/routes';

const logo = require('../../resources/images/logo.png');

const SideBar = (props: { navigator: any, history: any }) => {

    const datas = [
        {
            name: "Inicio",
            route: "/",
            icon: "phone-portrait",
        },
        {
            name: "Mi Perfil",
            route: "/profile",
            icon: "easel",
        },
        {
            name: "Login",
            route: LOGIN,
            icon: "phone-portrait",
        },
    ];

    return (
        <Container>
            <Content padder style={{flex: 1, backgroundColor: "#fff", top: -1}}>
                <View style={{flex: 1, alignItems: 'center', marginBottom: 5}}>
                    <Image source={logo} style={styles.drawerCover}></Image>
                </View>
                <View style={{flex: 1}}>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <View style={{flex: 1}}>
                                <ListItem button noBorder onPress={() => props.history.push(data.route)}>
                                    <Left>
                                        <Icon active name={data.icon}
                                              style={{color: "#777", fontSize: 29, width: 30, paddingRight: 40}}/>
                                        <Text>
                                            {data.name}
                                        </Text>
                                    </Left>
                                </ListItem>
                            </View>}
                    />
                </View>
            </Content>
        </Container>
    );
};


export interface Props {
    history: any;
}

export class HomePage extends React.Component<Props, {}> {

    drawer: any;
    navigator: any;

    closeDrawer = () => {
        this.drawer._root.close()
    };

    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {

        return (
            <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<SideBar navigator={this.navigator} history={this.props.history}/>}
            >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={this.openDrawer}>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Header</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <Text>
                            This is Content Section
                        </Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Drawer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    drawerCover: {
        resizeMode: "cover",
        width: 120,
        height: 120,
        marginTop: 30,
    },
    badgeText: {
        fontSize: 13,
        fontWeight: "400",
        textAlign: "center",
    },
});