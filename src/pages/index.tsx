import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Container } from 'react-bootstrap';
import SEO from 'react-seo-component';
import { H1, P } from '../components/page-elements';
import { useSiteMetadata } from '../hooks/use-site-metadata';


export default ({data}: any) => {

  const posts = data.allMdx.nodes
  console.log('=====================')
  console.log(posts)
  console.log('=====================')
  
  const {
    title,
    description,
    siteUrl,
    image,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <Container>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <H1>Hi people</H1>
      <P>Welcome to your new Gatsby site.</P>
      {posts && posts.map((post: any) => {return <P>
        <Link to={post.slug}>
        {post.frontmatter.title}
        </Link>
        </P>})}
      <P>Now go build something great.</P>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      // formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  )
}

export const query = graphql`
{
  allMdx {
    nodes {
      id
      slug
      frontmatter {
        date
        title
      }
    }
  }
}
`
