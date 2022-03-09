import React from 'react';

import { UlWrapper } from './components';
import { config } from './config';

export const Navbar = React.memo(() => (
  <nav>
    <UlWrapper>
      {config.map(({ path, label }) => (
        <li key={path}>
          <a href={path}>{label}</a>
        </li>
      ))}
    </UlWrapper>
  </nav>
));
