import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Container as BaseContainerStyles } from '../styledComponents/layout'
import SignIn from './SignIn/index'
import GoogleIcon from './icons/Google'

const Container = BaseContainerStyles.extend`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderContainer = styled.header`
  ${props => props.background};
  margin-bottom: 1.45rem;
`
/*
const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
*/
const Heading1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledGoogleIcon = styled(GoogleIcon)`
  margin-right: 5px;
`

const BACKGROUND = 'background-color: #20232a;'

const Header = ({ background, title, isAuthed, signIn, signOut }) => (
  <HeaderContainer background={background}>
    <Container>
      <Heading1>
        <StyledLink to="/">{title}</StyledLink>
      </Heading1>
      <SignIn
        onClick={() => (isAuthed ? signOut() : signIn('google'))}
        icon={isAuthed ? null : <StyledGoogleIcon />}
        text={isAuthed ? 'Sign Out' : 'Sign in with Google'}
      />
    </Container>
  </HeaderContainer>
)

Header.defaultProps = {
  background: BACKGROUND,
  title: 'Polling App',
}

Header.propTypes = {
  background: PropTypes.string,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  title: PropTypes.string,
  isAuthed: PropTypes.bool,
}

export default Header
