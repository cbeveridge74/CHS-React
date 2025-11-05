import TextField from '@material-ui/core/TextField';

function MKTextField(props) {
    return (
        <TextField  className="mk-mui-text-field" 
                    {...props} 
                    >
            {props.children}
        </TextField> 
    )
}
export default MKTextField