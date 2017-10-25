import * as React from 'react';

export interface Props {
    name: string;
}

export class HomePage extends React.Component<Props, {}> {

    render() {
        return (
            <div>Home!</div>
        );
    }

}
