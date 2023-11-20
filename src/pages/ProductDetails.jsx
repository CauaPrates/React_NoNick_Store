import React, { useEffect, useState } from "react";
import styles from './ProductDetails.module.css'

export const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState(null);
    const productId = match.params.idProduct;

    useEffect(() => {
        // Faça a chamada à API para obter detalhes do produto usando o productId
        // Exemplo:
        fetch(`http://localhost:8080/api/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching product details:", error));
    }, [productId]);

    if (!product) {
        return <p>Carregando...</p>;
    }

    return (

        <div className={styles.ProductDetails}>
            <div className={styles.images}>
                <div className={styles.more_images_container}>
                    {
                        product.productImages.map((image)=>(
                        <img src={image} className={styles.more_images} alt="Not found"/>
                        ))
                    }
                </div>
                <div className={styles.main_images_container}>
                    <img src={product.thumbnail} className={styles.main_images} alt="Not found"/>
                </div>
            </div>
            <div className={styles.side_details}>
                <h3>{product.name}</h3>
                <div className={styles.samllInfo}>
                <h4>marca: {product.brand}</h4>
                <h4>{product.quantity} disponiveis</h4>
                </div>
                
                <p className={styles.price}>R$ {product.value.toFixed(2)}</p>
                
                
                
            </div>
        </div>

    )
}


