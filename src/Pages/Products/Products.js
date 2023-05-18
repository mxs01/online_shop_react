import { useEffect, useState } from "react";
import classes from "./Products.module.css";

import { useNavigate } from "react-router-dom";

import ProductBox from "../../Components/ProductBox/ProductBox";

const Products = () => {

    const navigate = useNavigate();

  // const [products, setProducts] = useState([]);

  // useEffect(() =>
  //     {const fetchProducts = async () => {
  //         const response = await fetch('https://onlineshopreact-default-rtdb.europe-west1.firebasedatabase.app/Products.json')

  //         if (!response.ok){
  //             throw("Can't fetch data from Database")
  //         }

  //         const productsData = await response.json();

  //         let products = []

  //         for (const product in productsData){
  //             products.push({

  //                     id: product,
  //                     name: productsData[product]

  //                 }
  //             )
  //         }

  //         setProducts(products);

  //     }
  //     fetchProducts();

  //     console.log(products)
  // }, []
  // )

  const products = [
    { id: 1, name: "IPad" },
    { id: 2, name: "IPhone" },
    { id: 3, name: "MacBook" },
    { id: 4, name: "AirPods" },
  ];

  const openDetails = (id) => {
    return navigate(`${id}`)
  }

  return (
    <div className={classes.products__container}>
      <h1>Products</h1>
      <ul className={classes.products__element__container}>
        {products.map((product) => (
          <ProductBox title={product.name} id={product.id} key={product.id} onOpen={openDetails.bind(null,product.id)}/>
        ))}
      </ul>
    </div>
  );
};

export default Products;
