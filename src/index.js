import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Text = ({fontsize, color, name, underline}) => {

  return <div style ={{fontSize: fontsize, color: color, textDecoration: underline ? 'underline' : 'none'}}>{name}</div>
  
}

const Square = ({cssClass, label}) => {
  return <div className={cssClass}>{label}</div>
}


ReactDOM.render(
  <React.StrictMode>
      <Text name = 'Regular text' fontsize = '20px' />
      <Text name = 'Huge header' fontsize = '40px' />
      <Text name = 'Danger notification' fontsize = '13px' color = 'red' />
      <Text name = 'Undeline text' fontsize = '30px' underline = {true} />
      <Square cssClass="big" label='BIG square' />
      <Square cssClass="medium" label='A less square' />
      <Square cssClass="small" label='The smallest square' />
  </React.StrictMode>,
  document.getElementById('root')
);
