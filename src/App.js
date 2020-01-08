import React, { useEffect } from 'react';
import { Ripple } from 'react-awesome-spinners';
import styled from 'styled-components';
import { useAuthenticatedSwr } from './api/useAuthenticatedSwr';
import { GET_PROFILE_URL, SPOTIFY_LOGIN_URL } from './api/urls';
import { useAuth, logOut } from './api/auth';
import AuthenticatedApp from './AuthenticatedApp';
import Theme from './Theme';

function AppWithTheme() {
  return (
    <Theme>
      <App />
    </Theme>
  );
}

const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

function App() {
  useAuth();
  const { data: user, error } = useAuthenticatedSwr(GET_PROFILE_URL);

  useEffect(() => {
    if (error) {
      logOut();
    }
  }, [error]);

  if (error) {
    return <a href={SPOTIFY_LOGIN_URL}>Connect to spotify</a>;
  } else if (!user) {
    return (
      <SpinnerContainer>
        <Ripple />
      </SpinnerContainer>
    );
  } else {
    return <AuthenticatedApp user={user} />;
  }
}

export default AppWithTheme;
