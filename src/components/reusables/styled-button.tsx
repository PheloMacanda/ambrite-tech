import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#ff00ff',
        cursor: 'pointer',
        margin: '5px',
        height: '50px',
        width: '100px',
        color: '#fff'
    }

});

interface IProps {
    onClick: () => void;
    btnname: string;
}

const StyledBtn = (props: IProps) => {

    const classess = useStyles();

    return (
        <Button {...props} className={classess.btn}>{props.btnname}</Button>
    );
}

export default StyledBtn;