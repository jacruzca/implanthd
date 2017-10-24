import * as React from 'react';

export interface Props {
    name: string;
}

export class HomePage extends React.Component<Props, any> {

    render() {
        return (
            <div>Home!</div>
        );
    }

}
