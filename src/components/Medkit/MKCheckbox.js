import Checkbox from '@material-ui/core/Checkbox';

function MKCheckbox(props) {
    return (
        <Checkbox className="mk-mui-checkbox" {...props}>
            {props.children}
        </Checkbox>
    )
}
export default MKCheckbox
