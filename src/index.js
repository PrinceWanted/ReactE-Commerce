import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

//domain: dev-bddjqiq551usfntf.eu.auth0.com
//client ID: iaUPthTXK306Zs9c5NjPoEKvo9ToDAly

root.render(
  <Auth0Provider
    domain="dev-bddjqiq551usfntf.eu.auth0.com" //"dev-bddjqiq551usfntf.eu.auth0.com"
    clientId="iaUPthTXK306Zs9c5NjPoEKvo9ToDAly" //"HOxOgoGovmCLVJu8zwCO5u0GyhsZHmqN"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
