import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
//设置移动端的适配
//视口为750rem,如果width设为75rem就是整个宽度的十分之一
document.documentElement.style.fontSize=100/750+'vm'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

