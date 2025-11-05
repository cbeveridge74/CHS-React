import CardActions from '@material-ui/core/CardActions';
import MKCheckbox from './MKCheckbox';
import MKFormControlLabel from './MKFormControlLabel';
import React from 'react';

function MKCardActions(props) {
    const [state, setState] = React.useState({
        checkedA: true
      });

    const handleChange = (event) => {
        //event.defaultPrevented = true;
       // event.bubbles = false;
        //setState({ ...state, [event.target.name]: event.target.checked });
    }

    const handleConfirmationClick = (event) => {
        event.preventDefault();
        setState({ ...state, checkedA: !state.checkedA });
    }

    return (
        <div className="mk-mui-card-actions">
            {props.showconfirmation && (
            <div className="mk-confirmation" onClick={handleConfirmationClick}>
                <MKFormControlLabel
                control={<MKCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label={props.confirmationtext}
                />
            </div>)}
            
            <CardActions  {...props}>
                {props.children}
            </CardActions> 
        </div>
    )
}
export default MKCardActions
