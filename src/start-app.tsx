import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { Calculator, Key } from './calculator';
import './style.css';


const keys: Key[] = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];


const App = () => {

  const [value, setValue] = useState('0');

  const {
    current: calculator
  } = useRef(new Calculator());
  
  useEffect(() => {
    return calculator.on('change', setValue);
  }, []);

  return <div className='root'>
    <div className='screen'>{value}</div>
    <div className='panel'>
      {
        keys.map(k =>
          <button
            onClick={() => calculator.press(k)}
            className={'button' + (k === '0' ? ' zero' : '')}>{k}
          </button>
        )
      }
    </div>
  </div>;
};






export const startApp = () => {
  ReactDOM.render(<App />, document.body);
};