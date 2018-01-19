import React from 'react';
import TextField from './textWindow';
import SaveButton from './SaveButton';
import AlertBox from './AlertBox';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus';


export default class InspectionDetails extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
    }

    handleTextChange = (currentText) => {
        this.setState({ text: currentText })
    }

    render() {

        const { text } = this.state;
        return(
            <form>
                <TextField text={text} onTextChange={this.handleTextChange}/>
                <SaveButton onClick={this.save}/>
                <AlertBox status={this.state.saveStatus}/>

            </form>
        )
    }
}
