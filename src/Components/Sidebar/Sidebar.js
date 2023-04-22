import Button from '../Buttons/Button/OrderButton'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return <div className={classes.sidebar__container}>
        <form className={classes.form__order}>
            <input type='number' className={classes.form__input} defaultValue={1}/>
            <Button/>
        </form>
    </div>
}

export default Sidebar;