import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import Filter from "../components/Filter";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  //   const handleDelete = (event, id) => {
  //     event.stopPropagation();
  //     dispatch(deleteOneNote(id));
  //   };

  return (
    <>
      <main>
        <section id="filter">Filter</section>
        <Filter />
        <section id="productsListAll">
          <div className="container_product">
            <ul className="product_boxes_all">
              {products.map((product) => (
                <li className="product" key={product.id}>
                  <h2>
                    <strong>{product.title}</strong>
                  </h2>
                  <p> {product.aroma}</p>
                  <img src={product.img} alt={product.aroma} />
                  <p className="product_price">Price: {product.price}€</p>
                  <div>
                    <button
                      className="btn btn-light"
                      onClick={() => dispatch(addProduct(product))}
                    >
                      <p>Add to Cart</p>
                    </button>
                    <button className="btn btn-dark">
                      <p>See more</p>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
