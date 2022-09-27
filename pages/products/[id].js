import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Product.module.css";

const Products = () => {
  const [size, setSize] = useState(0);
  const Pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGONA",
    price: [19.9, 23.9, 27.9],
    desc: "persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s co     ",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={Pizza.img} alt="" layout="fill" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{Pizza.name}</h1>
        <span className={styles.price}>${Pizza.price[size]}</span>
        <p className={styles.desc}>{Pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div
            className={styles.size}
            onClick={() => {
              setSize(0);
            }}
          >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div
            className={styles.size}
            onClick={() => {
              setSize(1);
            }}
          >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div
            className={styles.size}
            onClick={() => {
              setSize(2);
            }}
          >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose Extra Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <lable htmlFor="double">Double Ingredients</lable>
          </div>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <lable htmlFor="spicy">Spicy Sauce</lable>
          </div>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <lable htmlFor="garlic">Garlic Sauce</lable>
          </div>
          <div className={styles.options}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <lable htmlFor="cheese">Extra Cheese</lable>
          </div>
        </div>
        <div className={styles.add}>
          <input type="num" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
