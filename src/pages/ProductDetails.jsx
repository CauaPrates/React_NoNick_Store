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
        return (
            <div className={styles.main_countainer_details}>

            <div className={styles.row_itens}>
                <div className={styles.more_images_container}>

                    <div className={styles.fakeImage}>NoNick™</div>
                    <div className={styles.fakeImage}>NoNick™</div>
                    <div className={styles.fakeImage}>NoNick™</div>
                    <div className={styles.fakeImage}>NoNick™</div>
                    
                </div>


                <div className={styles.product_info}>
                    <h3 className={styles.product_name}>PRODUTO NÃO ENCONTRADO</h3>
                    <h4 className={styles.product_brand}>NoNick™</h4>
                    <h4 className={styles.product_quantity}>0 disponiveis</h4>
                    <p className={styles.product_price}>R$ 0,00</p>
                    <strong>ID:00000000-0000-0000-0000-000000000000</strong>
                    <div className={styles.product_description}>
                        O produto pelo qual você esta tentando acessar pela <strong>URL</strong> não <strong>existe</strong> ou <strong>não foi especificado da forma certa</strong>  :(
                        por favor tente outra produtou ou outra <strong>URL</strong>.
                    </div>
                    <button className={styles.btn_buy}>Comprar</button>
                    <button className={styles.btn_add_cart}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
        );
    }

    return (
        <div className={styles.main_countainer_details}>

            <div className={styles.row_itens}>
                <div className={styles.more_images_container}>
                    {
                        product.productImages.map((image) => (
                            <img src={image} className={styles.more_images} alt="Not found" />
                        ))
                    }
                </div>


                <div className={styles.product_info}>
                    <h3 className={styles.product_name}>{product.name}</h3>
                    <h4 className={styles.product_brand}>{product.brand}</h4>
                    <h4 className={styles.product_quantity}>{product.quantity} disponiveis</h4>
                    <p className={styles.product_price}>R$ {product.value.toFixed(2)}</p>
                    {/* <strong>ID: {product.idProduct}</strong> */}
                    <div className={styles.product_description}>
                        {product.description}
                    </div>
                    
                    <button className={styles.btn_buy}>Comprar</button>
                    <button className={styles.btn_add_cart}>Adicionar ao carrinho</button>
                </div>

            </div>


        </div>
    )
}


