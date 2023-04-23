import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import SearchButton from "../Buttons/SearchButton/SearchButton";

const Header = () => {

    const [isLogged, setIsLogged] = useState(true);

  return (
    <div className={classes.header__container}>
      <Link className={classes.header__title} to="/"><h1>My Company</h1></Link>
      <div className={classes.header__search__bar__container}>
        <input
          type="text"
          className={classes.header__search__bar}
          placeholder="Searchbar"
        />
        <SearchButton/>
      </div>
      <nav className={classes.nav__bar__items}>
        {!isLogged && <NavLink className={({isActive}) => isActive ? classes.active:classes.nav__bar__item} to="login">Login</NavLink>}
        {isLogged && <NavLink className={({isActive}) => isActive ? classes.active:classes.nav__bar__item} to="products">Products</NavLink>}
        {/* {isLogged && <NavLink className={({isActive}) => isActive ? classes.active:classes.nav__bar__item}  >Cart</NavLink>} */}
      </nav>
    </div>
  );
};

export default Header;
