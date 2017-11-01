import * as React from 'react';
import { Field } from 'redux-form';
import {
    Container, Header, Content,
    List, ListItem, Title, Body,
    Left, Right, Button, Icon,
    Form, Item, Label, Card, CardItem,
} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { InputComponent, PickerComponent } from '../../core/components/FormComponents';
import DatePickerComponent from '../../core/components/DatePickerComponent';
import { PROFILE } from '../../constants/routes';

interface ProfileComponentProps {
    errors?: Array<string>; // global errors of the form
    handleSubmit: (values: any) => void;
    isLoading?: boolean;
    errorMessage?: string;
    user?: any;
    isProfessional?: boolean;
    isProfileLoading?: boolean;
    history?: any;
}

const EditProfileComponent: React.ComponentType<ProfileComponentProps> = (props) => {

    const {user, isProfessional} = props;

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.history.replace(PROFILE)}>
                        <Icon name='ios-arrow-back'/>
                    </Button>
                </Left>
                <Body>
                <Title>Editar Perfil</Title>
                </Body>
                <Right/>
            </Header>
            <Content disableKBDismissScroll={true} enableResetScrollToCoords={false}>
                <Form>
                    <Item stackedLabel>
                        <Label>Nombre</Label>
                        <Field name='firstName' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Nombre',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Apellidos</Label>
                        <Field name='lastName' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Apellidos',
                               }}/>
                    </Item>

                    <Item stackedLabel>
                        <Label>Género</Label>
                        <Field name='gender' component={PickerComponent}
                               {...{
                                   mode: "dropdown",
                                   headerBackButtonText: "Atrás",
                                   clearButtonMode: 'always',
                                   placeholder: 'Género',
                                   options: [
                                       {label: 'Masculino', value: 'Masculino'},
                                       {label: 'Femenino', value: 'Femenino'},
                                   ],
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Dirección</Label>
                        <Field name='address' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Dirección',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Ciudad</Label>
                        <Field name='city' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Ciudad',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>País</Label>
                        <Field name='country' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'País',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Teléfono fijo</Label>
                        <Field name='phone' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Teléfono fijo',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Teléfono móvil</Label>
                        <Field name='mobile' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Teléfono móvil',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Tipo de documento</Label>
                        <Field name='documentType' component={PickerComponent}
                               {...{
                                   mode: "dropdown",
                                   headerBackButtonText: "Atrás",
                                   clearButtonMode: 'always',
                                   placeholder: 'Tipo de documento',
                                   options: [
                                       {label: 'CC', value: 'CC'},
                                       {label: 'Cédula de extranjería', value: 'Cédula de extranjería'},
                                       {label: 'NIT', value: 'NIT'},
                                   ],
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Número de documento</Label>
                        <Field name='documentNumber' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Número de documento',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Número de documento</Label>
                        <Field name='documentNumber' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Número de documento',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Fecha de Nacimiento</Label>
                        <Field name='birthdate' component={DatePickerComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Fecha de Nacimiento',
                               }}/>
                    </Item>
                    <Item>
                        <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>
                            Estudios de pregrado
                        </Text>
                    </Item>
                    <Item stackedLabel>
                        <Label>Título</Label>
                        <Field name='title' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Título',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Institución</Label>
                        <Field name='institution' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Institución',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Fecha de grado</Label>
                        <Field name='titleDate' component={DatePickerComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Fecha de grado',
                               }}/>
                    </Item>
                    <Item>
                        <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>
                            Estudios de Postgrado
                        </Text>
                    </Item>
                    <Item stackedLabel>
                        <Label>Título</Label>
                        <Field name='postgraduateTitle' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Título',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Institución</Label>
                        <Field name='postgraduateInstitution' component={InputComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Institución',
                               }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Fecha de grado</Label>
                        <Field name='postgraduateTitleDate' component={DatePickerComponent}
                               {...{
                                   clearButtonMode: 'always',
                                   placeholder: 'Fecha de grado',
                               }}/>
                    </Item>
                    <Button block
                            primary
                            style={{marginTop: 30, marginBottom: 30}}
                            onPress={props.handleSubmit}
                    >
                        <Text style={{color: 'white'}}>Actualizar Perfil</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

export default EditProfileComponent;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
    },
});