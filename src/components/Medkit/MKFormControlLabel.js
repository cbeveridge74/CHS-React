import FormControlLabel from '@material-ui/core/FormControlLabel';

function MKFormControlLabel(props) {
    return (
        <FormControlLabel className="mk-mui-form-control-label" {...props}>
            {props.children}
        </FormControlLabel>
    )
}
export default MKFormControlLabel
