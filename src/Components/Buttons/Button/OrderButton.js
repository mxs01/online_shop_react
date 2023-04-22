import classes from './OrderButton.module.css'

const OrderButton = (props) => {
    return <button className={classes.order__button}>{props.content}</button>
}

export default OrderButton;