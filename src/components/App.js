
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const [numberarr, setNumberarr]=useState([]);
  const [sum, setSum]=useState(0);

  useEffect(()=>
  {
    function calcSum(numberarr) {

      let suml=0;

       for(let i=0;i<numberarr.length;i++)
        {
          suml+=parseInt(numberarr[i]);
        }
     return suml;
    }

    let z=calcSum(numberarr);
    setSum(z);
  },[numberarr]);

  return (
    <div>
        <h1>Sum Calculator</h1>
        <br />
        <input type="number" onInput={(e)=> {let newarr=[];
          for(let i=0;i<numberarr.length;i++)
          {
            newarr[i]=numberarr[i];
          }
          newarr.push(parseInt(e.target.value));
          setNumberarr(newarr);
        }}/>
        <br/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
