import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashoard';

import Login from '../pages/Login';

export default function Admin() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    null
  );
}

