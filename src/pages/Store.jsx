import React, { useEffect, useState } from "react";
import styles from '../pages/Store.module.css';

export const Store = () =>{

    const urlApi = "http://localhost:8080/api/products";
    const [data, setData] = useState([]);

    const getAll = () => {
        try {
        const result = fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                
                setData(data)
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

    return (

    <div className={styles.main}>
        <h2>T-shirts</h2>
        <div className={styles.div_prods}>
            
        {
        data.map((item) => (
                    <div className="div_prod" key={item.idProduct}>
                        
                        <div>
                            <img src ={item.productImages} className={styles.img_prod} alt="Not Found"/>
                        </div>

                        <div className={styles.div_info}>
                            <a href="#"><h4>{item.name}</h4></a>
                            <h4>{item.value}</h4>
                        </div>
                        
                    </div>
                ))
        }

        </div>
    </div>

    )
}