import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({

  image,
  paragraphs,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,

}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(52, 58, 90) 0.5rem 0px 0px, rgb(43, 71, 107) -0.5rem 0px 0px',
            backgroundColor: '#466075',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
            'rgb(52, 58, 90) 0.5rem 0px 0px, rgb(43, 71, 107) -0.5rem 0px 0px',
          backgroundColor: '#466073',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <div className="first_about_block">
                <div className="">
                  <div className="tiles">
                    <h1 className="titles">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="">
                      {heading}
                    </h3>
                    <p>{description}</p>
           
                  </div>
                </div>
                </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="">
          
            <div className="column is-10 is-offset-1">
              <div className="content">
              
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <h1>{paragraphs}</h1>
                    <Link className="btn" to="/products">
                      See all productsd
                    </Link>
                  </div>
                </div>
           
              </div>
            </div>
          
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  paragraphs: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        paragraphs={frontmatter.paragraphs}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
   
        title
        image {
          childImageSharp {
            fluid(maxWidth: 910, quality:90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        paragraphs
        heading
        subheading
       
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 290, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
