import React from 'react';

import {
  Container,
  Retweeted,
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketSeatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>RocketSeat</strong>
            <span>@Rocketseat</span>
            <Dot />
            <time>July of 14</time>
          </Header>
          <Description>Foguete nao tem re</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              20
            </Status>
            <Status>
              <LikeIcon />
              20
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
