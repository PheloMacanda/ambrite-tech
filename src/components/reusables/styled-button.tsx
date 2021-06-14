import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../constants/colors';

const useStyles = makeStyles({
    btn: {
        cursor: 'pointer',
        margin: '5px',
        height: '50px',
        width: '120px',
        color: COLORS.white
    }
});

interface IProps {
    onClick: () => void;
    btnname: string;
    color: any;
}

const StyledBtn = (props: IProps) => {

    const classess = useStyles();

    return (
        <Button {...props} className={classess.btn} style={{ backgroundColor: props.color }}>{props.btnname}</Button>
    );
}

export default StyledBtn;