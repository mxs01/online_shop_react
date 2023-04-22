import classes from "./Footer.module.css"

import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <div className={classes.footer__container}>
            <nav className={classes.footer__items}>
                <NavLink className={({isActive}) => isActive ? classes.active:classes.footer__item} to="impressum">Impressum</NavLink>
                <NavLink className={({isActive}) => isActive ? classes.active:classes.footer__item} to="carreer">Carreer</NavLink>
                <NavLink className={({isActive}) => isActive ? classes.active:classes.footer__item} to="support">Support</NavLink>
            </nav>
        </div>
    );

}
export default Footer;