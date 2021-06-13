import { Button } from '@material-ui/core';

const styles = {
    backgroundColor: '#ff00ff',
    cursor: 'pointer',
    margin: '5px'
};

interface IProps {
    onClick: () => void;
}

const StyledBtn = (props:IProps) => {
    return (
        <Button {...props} style={styles} />
    );
}

export default StyledBtn;