import React from 'react';
import StickBox from 'react-sticky-box';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search" />
        <SearchIcon />
      </SearchWrapper>
      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
