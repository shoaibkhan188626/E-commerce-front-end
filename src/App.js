import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import About from "./component/layout/About/About";
import Contact from "./component/layout/Contact/Contact";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import productList from "./component/Admin/productList";
import newProduct from "./component/Admin/newProduct";
import orderList from "./component/Admin/OrderList";
import processOrder from "./component/Admin/processOrder";
import productReviews from "./component/Admin/productReviews";
import updateProduct from "./component/Admin/UpdateProduct";
import updateUser from "./component/Admin/UpdateUser";
import usersList from "./component/Admin/UsersList";

function App() {
  
//making a state to use stripe api key
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  //for loading font from google
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  //function for preventing users from clicking the right click and opening the context menu
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Router>
        <Header  />
        
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute exact path="/process/payment" component={Payment} />
          </Elements>
        )}

        <Route exact path="/" component={Home} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={usersList}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/reviews"
          component={productReviews}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={newProduct}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/orders"
          component={orderList}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={productList}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={productList}
        />

        <Route exact path="/product/:id" component={ProductDetails} />

        <Route exact path="/products" component={Products} />

        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/about" component={About} />

        <Route exact path="/contact" component={Contact} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <ProtectedRoute exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <Switch>
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/product/:id"
            component={updateProduct}
          />
        </Switch>

        <Switch>
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/order/:id"
            component={processOrder}
          />
        </Switch>

        <Switch>
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/user/:id"
            component={updateUser}
          />
        </Switch>

        <Switch>
          <ProtectedRoute
            exact
            path="/order/confirm"
            component={ConfirmOrder}
          />

          <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
