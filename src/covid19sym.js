import React from 'react';

function Covid(props) {
    return (
        <div>
          <h1> The first symptoms of COVID-19 {props.fistSym} </h1>
          <h1> The second symptoms of COVID-19 {props.secondSym} </h1>
          <h1> The third symptoms of COVID-19 {props.thirdSym}</h1>
        </div>
    
    )
 }
 export default Covid;