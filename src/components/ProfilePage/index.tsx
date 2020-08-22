import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  LocationIcon,
  CakeIcon,
  Followage,
  ProfileData,
  EditButton,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Otto Neto</h1>
        <h2>@OttoTerceiro</h2>
        <p>Love develoepr</p>
        <ul>
          <li>
            <LocationIcon />
            Patos, Paraiba
          </li>
          <li>
            <CakeIcon />
            Was born in April, 21
          </li>
        </ul>
        <Followage>
          <span>
            Following
            <strong>100</strong>
          </span>
          <span>
            <strong>150 </strong>
            Followers
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
