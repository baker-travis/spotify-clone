import React from 'react';
import styled from 'styled-components';
import { UserProvider } from './UserContext';
import CurrentlyPlaying from './CurrentlyPlaying';
import Navigation from './Navigation';

const PlayerContainer = styled.div`
  background-color: #252525;
  min-height: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 5px black;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
`;

export default function AuthenticatedApp({ user }) {
  return (
    <UserProvider user={user}>
      <PlayerContainer>
        <ContentContainer>
          {/* <p>Name: {user.display_name}</p>
          <img
            src={user.images[0].url}
            alt="profile pic"
            style={{ borderRadius: '50%', height: '50px' }}
          /> */}
          <Navigation profileImgUrl={user.images[0].url} />
        </ContentContainer>
        <CurrentlyPlaying />
      </PlayerContainer>
    </UserProvider>
  );
}
