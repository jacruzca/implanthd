import * as React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import {
    Grid, Content, Header, Col, Container, Row, Button, Icon, Title, Body,
} from 'native-base';
import { Link } from 'react-router-native';
import { LOGIN } from '../../constants/routes';
import { PRIMARY_COLOR } from '../../constants/colors';

const logo = require('../../resources/images/logo.png');
const icon1 = require('../../resources/images/icon_1.png');
const icon2 = require('../../resources/images/icon_2.png');
const icon3 = require('../../resources/images/icon_3.png');
const icon4 = require('../../resources/images/icon_4.png');
const icon5 = require('../../resources/images/icon_5.png');
const icon6 = require('../../resources/images/icon_6.png');


export interface Props {
    history: any;
}

export class HomePage extends React.Component<Props, {}> {


    displayButton = (icon: any, text: string, imageSize: number) => {
        return (
            <Button transparent style={{width: imageSize, height: imageSize}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={icon} style={{width: imageSize}}/>
                    <Text style={{textAlign: 'center', color: PRIMARY_COLOR}}>{text}</Text>
                </View>
            </Button>
        );
    };

    render() {

        const {width} = Dimensions.get('window');
        const imageSize = (width / 2);
        const columnSize = (width / 2);

        return (
            <Container style={{paddingBottom: 30}}>
                <Header>
                    <Body>
                    <Title>ImplantHD</Title>
                    </Body>
                </Header>
                <Content style={{paddingTop: 20}}>
                    <Grid>
                        <Row style={styles.row}>
                            <Col style={StyleSheet.flatten([styles.column, {height: columnSize, width: columnSize,}])}>
                                {this.displayButton(icon1, 'Perfil', imageSize)}
                            </Col>
                            <Col style={StyleSheet.flatten([styles.column, {height: columnSize, width: columnSize,}])}>
                                {this.displayButton(icon2, 'Crear Historia', imageSize)}
                            </Col>
                        </Row>
                        <Row style={styles.row}>
                            <Col style={[styles.column, {height: columnSize, width: columnSize}]}>
                                {this.displayButton(icon3, 'Inventario', imageSize)}
                            </Col>
                            <Col style={[styles.column, {height: columnSize, width: columnSize}]}>
                                {this.displayButton(icon4, 'Agenda', imageSize)}
                            </Col>
                        </Row>
                        <Row style={styles.row}>
                            <Col style={[styles.column, {height: columnSize, width: columnSize}]}>
                                {this.displayButton(icon5, 'Historias Clínicas', imageSize)}
                            </Col>
                            <Col style={[styles.column, {height: columnSize}]}>
                                {this.displayButton(icon6, 'Auxiliar', imageSize)}
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
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
    row: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});