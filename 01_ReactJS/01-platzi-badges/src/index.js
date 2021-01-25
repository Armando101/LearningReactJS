import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge
    firstName = 'Armando' lastName = 'Rivera' jobTitle="Frontend Developer"
    contact = "Armando101"
    avatar = "https://avatars.githubusercontent.com/u/35951139?s=460&u=13d966481ef4970a3827c7cbe13ad1c8caca42ad&v=4"/>,
  container
);