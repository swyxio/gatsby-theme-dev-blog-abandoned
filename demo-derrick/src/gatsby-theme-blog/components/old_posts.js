import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Styled, css } from 'theme-ui'

import Layout from 'gatsby-theme-blog/src/components/layout'
import SEO from 'gatsby-theme-blog/src/components/seo'
import Footer from 'gatsby-theme-blog/src/components/home-footer'

/** customizations
 *
 *
 */
import { formatPostDate, formatReadingTime } from 'gatsby-theme-dev-blog/src/utils/helpers'
import '../../utils/override'
/** end customization */

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={{
                    textDecoration: `none`,
                  }}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <small>{node.date}</small>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
