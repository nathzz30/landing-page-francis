import React from 'react';
import './App.css';
import Header from './Components/Header';

const App = () => {
  const socialIcons = [
    { icon: 'fab fa-twitter', social: 'Link to Twitter' },
    { icon: 'fab fa-facebook-f', social: 'Link to Facebook' },
    { icon: 'fab fa-snapchat-ghost', social: 'Link to Snapchat' },
    { icon: 'fab fa-instagram', social: 'Link to Instagram' },
    { icon: 'fab fa-medium-m', social: 'Link to Medium' }
  ];
  return (
    <div className="App">
      <Header logo="HTML5 UP" socialIcons={socialIcons} />
    </div>
  );
};

export default App;
