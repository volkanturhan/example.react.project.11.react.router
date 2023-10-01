import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
             className={({ isActive }) => {
               return isActive ? classes.active : undefined;
             }}
            //  style={({ isActive }) => ({
            //     textAlign: isActive ? "center" : "left",
            //   })}
             end
            
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive ? classes.active : undefined;
            }}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default MainNavigation;
