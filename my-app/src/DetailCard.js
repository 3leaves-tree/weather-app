import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(detail, value, unit) {
  return { detail, value, unit };
}

const DetailCard = function(props) {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(6);

  if (props.details) {
    const rows = [
      createData('Weather',props.details.weather[0].main,''),
      createData('Current Temperature', Math.floor(props.details.main.temp), '℉'),
      createData('High Temperature', Math.floor(props.details.main.temp_min), '℉'),
      createData('Low Temperature', Math.floor(props.details.main.temp_max), '℉'),
      createData('Humidity', Math.floor(props.details.main.humidity), '%'),
      createData('Wind', Math.floor(props.details.wind.speed), 'mph'),
    ]
    return (
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 600 }} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.detail}
                </TableCell>
                <TableCell style={{ width: 200 }} align="right">
                  {row.value.toString()+row.unit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return null;
  }

}

export default DetailCard;