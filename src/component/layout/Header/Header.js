import React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import { logout } from "../../../actions/userAction";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import "./Header.css";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <>
      <div className="Headcontainer">
        <Tooltip title="Home">
          <Link to="/">
            <HomeIcon className="homeIcon" />
          </Link>
        </Tooltip>

        {isAuthenticated === true && (
          <Badge badgeContent={cartItems.length} className="cartIconBadge">
            <Tooltip title="Cart">
              <Link to="/cart">
                <ShoppingCartIcon className="cartIcon" />
              </Link>
            </Tooltip>
          </Badge>
        )}

        {user && user.role === "admin" && (
          <Tooltip title="Dashboard">
            <Link to="/admin/dashboard">
              <DashboardIcon className="DashboardIcon" />
            </Link>
          </Tooltip>
        )}

        <Tooltip title="Search">
          <Link to="/Search">
            <SearchIcon className="SearchIcon" />
          </Link>
        </Tooltip>

        {isAuthenticated === true && (
          <Tooltip title="Orders">
            <Link to="/orders">
              <ListAltIcon className="ListAltIcon" />
            </Link>
          </Tooltip>
        )}

        <Tooltip className="Products" title="All products">
          <Link to="/products">
            <p>Products</p>
          </Link>
        </Tooltip>

        {isAuthenticated === true && (
          <Tooltip title="Account">
            <Link to="/account">
              <Avatar alt="user" src={user.avatar.url} className="avatarIcon" />
            </Link>
          </Tooltip>
        )}

        {isAuthenticated === true && (
          <Tooltip title="Logout">
            <ExitToAppIcon onClick={logoutUser} className="logoutIcon" />
          </Tooltip>
        )}
      </div>
    </>
  );
};

export default Header;
