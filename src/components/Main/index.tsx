import React from 'react';
import ProfilePage from '../ProfilePage';
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  BellIcon,
  SearchIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="submit">
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Otto Neto</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
