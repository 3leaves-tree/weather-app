import './App.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function createData(detail, value, unit) {
  return { detail, value, unit };
}

const DetailCard = function(props) {

  const city = props.city;

  if (props.details) {
    const rows = [
      createData(`Weather in ${city}`,props.details.weather[0].main,''),
      createData('Current Temperature', Math.floor(props.details.main.temp), '℉'),
      createData('High Temperature', Math.floor(props.details.main.temp_min), '℉'),
      createData('Low Temperature', Math.floor(props.details.main.temp_max), '℉'),
      createData('Humidity', Math.floor(props.details.main.humidity), '%'),
      createData('Wind', Math.floor(props.details.wind.speed), 'mph'),
    ]
    return (
      <div className='detail'>
          <Table sx={{ minWidth: 600 }} >
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i} >
                  <TableCell component="th" scope="row" sx={{
                    fontSize: '1.1rem'
                  }}>
                  {row.detail}
                  </TableCell>
                  <TableCell style={{ width: 200 }} align="right" sx={{
                    fontSize: '1.1rem'
                  }}>
                  {row.value.toString()+row.unit}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
    );
  } else {
    return null;
  }

}

export default DetailCard;