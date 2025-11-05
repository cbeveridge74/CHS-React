import CardContent from '@material-ui/core/CardContent'

function MKCardContent(props) {
    return (
        <CardContent {...props} className="mk-mui-card-content">
            {props.children}
        </CardContent>
    )
}
export default MKCardContent
