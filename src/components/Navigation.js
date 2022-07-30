import React from 'react';
import { NavLink } from 'react-router-dom';

const styleLink = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: 'rgb(28, 15, 2)',
  fontSize: 30,
};
const activeStyleLink = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: 'rgb(180, 47, 7)',
  // color: '#3c020b',
  fontSize: 30,
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/counter"
      style={({ isActive }) =>
        isActive ? activeStyleLink : styleLink
      }
    >
      Counter
    </NavLink>
    <NavLink
      to="/countdown"
      style={({ isActive }) =>
        isActive ? activeStyleLink : styleLink
      }
    >
      Countdown
    </NavLink>

    <NavLink
      to="/todos"
      style={({ isActive }) =>
        isActive ? activeStyleLink : styleLink
      }
    >
      Todos
    </NavLink>
  </nav>
);

export default Navigation;
