import React from 'react';
import Button from './Button.jsx';

import '../styles/mystyle.css';

export default class App extends React.Component
{
  render()
  {
    return(
       <div>
         <h1> Hi from React!!! </h1>
         <Button />
       </div>
    );

  }
  
}
