import Card from '@material-ui/core/Card';

function MKCard(props) {
    return (
        <Card className="mk-mui-card" {...props}>
            {props.children}
        </Card> 
    )
}
export default MKCard
