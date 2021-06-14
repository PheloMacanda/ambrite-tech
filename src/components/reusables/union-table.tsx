import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StyledBtn from './styled-button';
import { COLORS } from '../../constants/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UnionTable ({ rows }:any) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Union</TableCell>
            <TableCell align="right">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.toString()}</TableCell>
              <TableCell align="right">
                  <StyledBtn 
                    onClick={() => alert(Object.keys(row).toString())}
                    color={COLORS.primary}
                    btnname="Results"
                  />
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}