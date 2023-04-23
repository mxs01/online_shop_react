import { useEffect, useState } from 'react'
import classes from './Products.module.css'

import ProductBox from '../../Components/ProductBox/ProductBox';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>
        {const fetchProducts = async () => {
            const response = await fetch('https://onlineshopreact-default-rtdb.europe-west1.firebasedatabase.app/Products.json')
    
            if (!response.ok){
                throw("Can't fetch data from Database")
            }
    
            const productsData = await response.json();

    
            let products = []
    
            for (const product in productsData){
                products.push({
                    
                        id: product,
                        name: productsData[product]

                    }
                )
            }

            setProducts(products);
    
        }
        fetchProducts();
        
        console.log(products)
    }, []
    )
    


    return <>
    <h1 >Products</h1>
    <ul className={classes.products__container}>
        {products.map(product => <ProductBox title={product.name} id={product.id}/>)}
    </ul>
    </>;
    }


export default Products;