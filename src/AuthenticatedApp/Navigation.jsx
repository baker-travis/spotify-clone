import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

import IconButton from '../components/IconButton';

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2rem;
  padding: 20px 30px;
  align-items: center;
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 20px;
  }
`;

export default function Navigation({ profileImgUrl }) {
  return (
    <NavigationContainer>
      <NavGroup>
        <IconButton>
          <MdMenu />
        </IconButton>
        <IconButton>
          <FiSearch />
        </IconButton>
      </NavGroup>
      <NavGroup>
        <IconButton>Settings</IconButton>
        <IconButton>Profile</IconButton>
        <img
          src={profileImgUrl}
          alt="profile pic"
          style={{ borderRadius: '50%', height: '40px' }}
        />
      </NavGroup>
    </NavigationContainer>
  );
}
