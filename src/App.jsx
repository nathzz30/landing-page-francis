import React from 'react';
import './App.scss';
import Header from './Components/Header';

const App = () => {
  const socialIcons = [
    { iconClass: 'fab fa-twitter', social: 'Link to Twitter' },
    { iconClass: 'fab fa-facebook-f', social: 'Link to Facebook' },
    { iconClass: 'fab fa-snapchat-ghost', social: 'Link to Snapchat' },
    { iconClass: 'fab fa-instagram', social: 'Link to Instagram' },
    { iconClass: 'fab fa-medium-m', social: 'Link to Medium' }
  ];
  return (
    <div className="App">
      <Header logo="HTML5 UP" socialIcons={socialIcons} />
    </div>
  );
};

export default App;
