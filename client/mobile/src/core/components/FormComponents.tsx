import * as React from 'react';
import { Form, Item, Input, Icon, Picker } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export const InputComponent = (props: any) => {
    const {touched, error} = props.meta;
    return (
        <View style={styles.containerStyle}>
            <Item error={touched && error}>
                <Icon active name={props.icon} style={{fontSize: 25, color: 'white'}}/>
                <Input {...props} {...props.input}/>
            </Item>
            {touched &&
            ((error &&
                <View style={styles.containerErrorStyle}>
                    <Icon name='close-circle'/>
                    <Text style={styles.errorStyle}>{error}</Text>
                </View>
            ))}
        </View>
    );
};

export const PickerComponent = (props: any) => {
    const {input: {onChange, value, ...inputProps}, children, ...pickerProps} = props;
    const {touched, error} = props.meta;
    return (
        <View style={styles.containerStyle}>
            <Item error={touched && error}>
                <Icon active name={props.icon} style={{fontSize: 25, color: 'white'}}/>
                <Picker
                    selectedValue={value}
                    onValueChange={value => onChange(value)}
                    {...inputProps}
                    {...pickerProps}
                >
                    {props.options.map((opt, i) => { // tslint:disable-next-line
                        return <Picker.Item key={i} label={opt.label} value={opt.value}/> // tslint:disable-line
                    })}
                </Picker>
            </Item>
            {touched &&
            ((error &&
                <View style={styles.containerErrorStyle}>
                    <Icon name='close-circle'/>
                    <Text style={styles.errorStyle}>{error}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
    },
    containerErrorStyle: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignSelf: "stretch",
    },
    errorStyle: {
        color: 'red',
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});