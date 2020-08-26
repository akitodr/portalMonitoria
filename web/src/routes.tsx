import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Projects from './pages/Projects';
import Others from './pages/Others';
import FormStudent from './pages/Students/FormStudent';

const Routes = () => {
  return (
    <>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Students} path="/students" exact />
      <Route component={Teachers} path="/teachers" />
      <Route component={Projects} path="/projects" />
      <Route component={Others} path="/others" />
      <Route component={FormStudent} path="/students/form" />
    </>
  );
};

export default Routes;