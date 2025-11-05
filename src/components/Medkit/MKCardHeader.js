import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'

function MKCardHeader(props) {
    return (
        <CardHeader {...props} className="mk-mui-card-header">
            {props.children}
        </CardHeader>
    )
}
export default MKCardHeader
