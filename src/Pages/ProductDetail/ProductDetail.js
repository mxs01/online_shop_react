import { useNavigate, useSearchParams } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  return (
    <div className={classes.detail__page__container}>
      <h1 className={classes.detail__page__title}>title</h1>
      <img
        className={classes.detail__page__product__image}
        alt="Image of product"
      ></img>
      <div className={classes.detail__page__container__second__column}>
        <p className={classes.detail__page__product__description}>
          description
        </p>
        <div className={classes.detail__page__sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
