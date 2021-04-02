import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC<any> = () => {
  return (
    <nav>
      <ul className="flex flex-wrap">
        <li className="p-4">
          <NavLink activeClassName="text-purple-700 font-bold" to={'/home'}>
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink activeClassName="text-purple-700 font-bold" to={'/todos'}>
            Todos
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink activeClassName="text-purple-700 font-bold" to={'/profile'}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
