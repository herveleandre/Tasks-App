import './Card.css';
//Creating custom funtion card wrapper. And another way to write function
    const Card = (props) =>{
        const classes = 'card '+ props.className;
        return <div className={classes}>{props.children}</div>;//This content will be the content between the oppening and closing  custom Card component
    }

    export default Card;