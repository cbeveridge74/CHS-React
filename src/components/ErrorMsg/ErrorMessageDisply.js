import classes from './ErrorMessage.module.css';

// In order to 'inject' content into the outer 'this Card' component
// you need to use props and {props.children} a built in React mechanism

function ErrorMessage(props) {
    // console.log(props);
    return <div className={classes.description}>{props.errorMsg}</div> 
}

export default ErrorMessage;