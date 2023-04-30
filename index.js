import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function componente({titulo}){
 return(
 <div>Bienvenidos a mi sitio web
  </div>
 );
}


ReactDOM.render(componente,document.getElementById("root"));
