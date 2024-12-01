import { Button } from "antd"
import styles from './CustomButton.module.css';

const CustomButton = ({
    text,
    onSubmit
}) =>
{
    return (
       <Button 
       className={styles.btnPrimary}
       onClick={onSubmit}>
        {text}
       </Button>
    )
}

export default CustomButton;