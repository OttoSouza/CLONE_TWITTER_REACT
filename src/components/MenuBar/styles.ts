import styled, { css } from 'styled-components';
import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Rocket,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0%;

    padding: 8px 16px 18px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;
export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const Logo = styled(Rocket)`
  width: 40px;
  height: 40px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;
export const MenuButtons = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 16px;
      font-weight: bold;
      font-size: 16px;
    }
    padding-right: 16px;
  }

  padding: 8px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 32px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }
  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconsCSS = css`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconsCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconsCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconsCSS}
`;

export const BotSide = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;

  background: var(--gray);
`;
export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 12px;
    font-size: 14px;
    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 24px;
    height: 24px;
    color: var(--white);
    margin-left: 32px;
    cursor: pointer;
    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
