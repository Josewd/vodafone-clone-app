// Core
import React from 'react';

// Media
import logo from '../../img/vodafone-log-white.png';

// Styles
import {
  Container,
  GreetingText,
  Logo,
  Status,
  StatusBox,
  UserName,
} from './Header.styles';

// Props Interface
interface headerProps {
  user: {
    name: string;
    status: string;
  };
}

const Header = (props: headerProps) => {
  const { user } = props;
  const date = new Date().getHours();
  const text = date <= 12 ? 'Good Morning ' : 'Good Afternoon ';

  return (
    <Container>
      <Logo source={logo} />
      <StatusBox>
        <GreetingText>{text}</GreetingText>
        <UserName>{user.name}</UserName>
        <Status status={user.status} />
      </StatusBox>
    </Container>
  );
};

export default Header;
