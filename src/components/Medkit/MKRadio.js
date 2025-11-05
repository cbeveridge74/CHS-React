import Radio from '@material-ui/core/Radio';

function MKRadio(props) {
    return (
        <Radio className="mk-mui-radio" {...props}>
            {props.children}
        </Radio>
    )
}

export default MKRadio
