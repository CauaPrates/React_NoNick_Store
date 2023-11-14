import React, { useEffect, useState } from "react";
import styles from '../pages/Store.module.css';

export const Store = () =>{

    const urlApi = "http://localhost:8080/api/products";
    const [dataCamisetas, setDataCamisetas] = useState([]);
    const [dataTenis, setDataTenis] = useState([]);
    const [dataAcessorios, setDataAcessorios] = useState([]);

    const getAll = () => {
        try {
        const result = fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                
                    setDataAcessorios(data.Acessorios || []);
                    setDataCamisetas(data.Camisetas || []);
                    setDataTenis(data.Tenis || []);
                return data;
            });
    
        return result;
        } catch (error) {

        console.error("Error fetching data:", error);

        }
    }

    useEffect(() => {

        getAll();

    },[])

    const formatNumber = (number) => {
        return number.toFixed(2).replace('.', ',');
    }

    const truncateText = (text, maxLength) => {
        maxLength = 20;
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    return (

    <div className={styles.main}>
        <h2>T-shirts</h2>
        <div className={styles.div_prods}>
            
        {dataCamisetas.length > 0 && (
                    dataCamisetas.map((item) => (
                        <div className="div_prod" key={item.idProduct}>
                            <div>
                                <img src={item.thumbnail} className={styles.img_prod} alt="Not Found" />
                            </div>
                            <div className={styles.div_info}>
                                <a href="#"><h4>{truncateText(item.name)}</h4></a>
                                <p>R$ {formatNumber(item.value)}</p>
                            </div>
                        </div>
                    ))
                )}

        </div>
        <h2>Sneakers</h2>
        <div className={styles.div_prods}>
            
        {dataTenis.length > 0 && (
                    dataTenis.map((item) => (
                        <div className="div_prod" key={item.idProduct}>
                            <div>
                                <img src={item.thumbnail} className={styles.img_prod} alt="Not Found" />
                            </div>
                            <div className={styles.div_info}>
                                <a href="#"><h4>{truncateText(item.name)}</h4></a>
                                <p>R$ {formatNumber(item.value)}</p>
                            </div>
                        </div>
                    ))
                )}

        </div>
        <h2>Accessories</h2>
        <div className={styles.div_prods}>
            
        {dataAcessorios.length > 0 && (
                    dataAcessorios.map((item) => (
                        <div className="div_prod" key={item.idProduct}>
                            <div>
                                <img src={item.thumbnail} className={styles.img_prod} alt="Not Found" />
                            </div>
                            <div className={styles.div_info}>
                                <a href="#"><h4>{truncateText(item.name)}</h4></a>
                                <p>R$ {formatNumber(item.value)}</p>
                            </div>
                        </div>
                    ))
                )}

        </div>
    </div>

    )
}