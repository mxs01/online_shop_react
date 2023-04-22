import Sidebar from '../../Components/Sidebar/Sidebar'
import classes from './ProductDetail.module.css'

const ProductDetail = () => {
    return <div className={classes.detail__page__container}>
        <h1 className={classes.detail__page__title}>TITLE</h1>
        <img className={classes.detail__page__product__image} alt='Image of product'></img>
        <p className={classes.detail__page__product__description}>DESCRIPTION</p>
        <div className={classes.detail__page__sidebar}>
            <Sidebar/>
        </div>
    </div>
}

export default ProductDetail