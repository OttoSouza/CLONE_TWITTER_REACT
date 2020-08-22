import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButtons>
          <HomeIcon />
          <span>Home page</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notifications</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Messages</span>
        </MenuButtons>

        <MenuButtons>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButtons>

        <MenuButtons className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButtons>
        <Button>
          <span>Tweet</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>otto.terceiroo@gmail.com</strong>
          <span>@OTerceiro</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
