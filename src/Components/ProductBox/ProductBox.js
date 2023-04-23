import classes from './ProductBox.module.css'

const ProductBox = (props) => {
    return <li className={classes.product__box__container} key={props.id} id={props.id}>
        <div className={classes.product__box__image__container}>
            <img className={classes.product__box__image} src={props.img} alt="Image of the product"></img>
        </div>
        <h3 className={classes.product__box__title}>{props.title}</h3>
        <p className={classes.product__box__content}>Price</p>
    </li>
}

export default ProductBox;