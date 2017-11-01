// @flow

import * as React from 'react';
import { Input } from 'native-base';
import DatePicker from 'react-native-datepicker';

type State = {
    date: Date,
}

class DatePickerComponent extends React.PureComponent<any, State> {

    constructor(props: any) {
        super(props);
        if (props.input.value) {
            this.state = {date: props.input.value};
        } else {
            this.state = {date: new Date()};
        }

    }

    render() {
        const {input, placeholder} = this.props;

        return (
            <DatePicker
                {...this.props}
                style={{paddingTop: 20, paddingBottom: 20}}
                date={this.state.date}
                mode="date"
                placeholder={placeholder}
                format="DD-MM-YYYY"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                customStyles={{
                    dateIcon: {
                        position: 'absolute', left: 0,
                        top: 4, marginLeft: 0,
                    },
                    dateInput: {marginLeft: 36},
                }}
                onDateChange={(date) => {
                    this.setState({date});
                    input.onChange(date);
                }}
            />
        );
    }

}

export default DatePickerComponent;
