import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        defaultDescription: description
        defaultImage: img
        defaultTitle: title
        titleTemplate
        twitterUsername
        siteUrl: url
      }
    }
  }
`

const Seo = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.ul} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.description && (
        <meta propery="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="preload"
        href="/fonts/Progress.woff2"
        as="font"
        type="font/woff2"
        crossorigin
      ></link>
      <link
        rel="preload"
        href="/fonts/Disgracefull-Demo.woff2"
        as="font"
        type="font/woff2"
        crossorigin
      ></link>
    </Helmet>
  )
}

export default Seo
