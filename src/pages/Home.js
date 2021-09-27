import React from "react";
import { Link } from "react-router-dom";
import scrubs from "../img/scrubs.png";
import body_butter from "../img/body_butter.png";
import honey_sauna from "../img/honey_sauna.png";
import essent_oils from "../img/essent.oils.jpg";

const Home = () => {
  return (
    <>
      <main>
        <section id="productsList">
          <div class="container_box">
            <div class="product_boxes">
              <Link className="box" to="/products">
                <img src={scrubs} alt={""} />
                <h3>Scrubs</h3>
              </Link>
              <Link className="box" to="/products">
                <img src={body_butter} alt={""} />
                <h3>Body butter</h3>
              </Link>
              <Link className="box" to="/products">
                <img src={honey_sauna} alt={""} />
                <h3>Sauna honey</h3>
              </Link>
              <Link className="box" to="/products">
                <img src={essent_oils} alt={""} />
                <h3>Essential oils</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
