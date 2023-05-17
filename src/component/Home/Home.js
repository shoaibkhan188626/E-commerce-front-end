import React from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "./../../actions/productAction";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";





const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      window.scrollTo(0, 0);

    }

    dispatch(getProduct());
  }, [dispatch, error, alert]);


 

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Ecommerce"} />

          <div className="banner">
            <p>WELCOME TO THE TREND</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
            {isAuthenticated === false && (
              <a href="/login">
                <button>login</button>
              </a>
            )}
          </div>

          <h2 className="homeHeading">FEATURED PRODUCTS</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
