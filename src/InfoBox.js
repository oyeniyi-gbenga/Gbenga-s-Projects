import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
    >
      <CardContent>
        {/* Title i.e Coronavirus Cases */}

        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>

        {/*  +120 Number of cases */}
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          {cases}
        </h2>

        {/*  1.2M Total */}
        <Typography className='infoBox__total' color='textSecondary'>
          Total : {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
