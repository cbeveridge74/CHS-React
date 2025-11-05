import Button from '@material-ui/core/Button';

function MKButton(props) {
    return (
        <Button  {...props}>
            {props.children}
        </Button>
    )
}
export default MKButton
