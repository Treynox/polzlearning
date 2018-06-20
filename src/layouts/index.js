import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Auth from '../containers/Auth'
import Header from '../components/header'
import { Container as BaseContainerStyles } from '../styledComponents/layout'

import './index.css'

const Container = BaseContainerStyles.extend`
  padding-top: 0;
`;

const Layout = ({ children, data, ...props }) => (
  <Auth>
    {auth => {
      return (
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header
            background="background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)"
            title={data.site.siteMetadata.title}
            {...auth}
          />
          <Container>
            {children({
              ...props,
              ...auth,
            })}
          </Container>
        </div>
      );
    }}
  </Auth>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
