import React from 'react';
import { graphql } from 'gatsby';
import DownloadButton from '../../components/download-button';
import SocialCards from '../../components/social-cards';
import Title from '../../partials/title';
import Img from 'gatsby-image';
import Link from '../../components/link';
import Companies from '../../partials/companies';

// SVGs
import iconDownload from '../../assets/icons/icn-download.svg';
import illustrationDesigner from '../../assets/illustration-insomnia-designer-header.svg';

export default ({ data }) => (
  <React.Fragment>
    <Title>Insomnia Designer</Title>
    <SocialCards
      title="Insomnia Designer | The Collaborative Design Platform for APIs"
      summary="Build APIs that work. The API Design Platform for designing, testing, and managing APIs."
      isBanner
    />

    <header className="header--wide">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1>Insomnia Designer</h1>
            <p className="subheader">
              Build APIs that work. Using the collaborative API design platform
              that enables you to adopt a design-first approach to creating,
              managing, testing, and deploying your APIs using OpenAPI.
            </p>
            <DownloadButton className="button-download">
              <img src={iconDownload} className="icon" alt="Download" /> Latest
              Release
              <span className="badge">New</span>
            </DownloadButton>
            <p className="latest-version">
              <small>
                <Link to={`/changelog`}>Changelog</Link>
              </small>
            </p>
          </div>
          <div className="col-5">
            <img
              className="illustration"
              src={illustrationDesigner}
              alt="Designer Illustration"
            />
          </div>
        </div>
      </div>
    </header>

    <main role="main">
      <section className="no-margin padding-top-lg padding-bottom-lg">
        <div className="container container--statement">
          <div className="row text-center">
            <div className="col-12">
              <h3 className="text-xl">Adopt API Design-First Quickly</h3>
              <p>
                Start designing, and documenting your APIs using OpenAPI today.
                Generate requests, deploy gateways, collaborate with Git, and
                write tests for your CI/CD pipelines like Github Actions with
                Insomnia Inso.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-center-y">
            <div className="col-7">
              <Img
                sizes={data.documentsImg.childImageSharp.sizes}
                alt="Document Listing"
              />
            </div>
            <div className="col-5">
              <h3 className="text-xl">Manage APIs</h3>
              <p>Manage all of your API designs in one place.</p>
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-5">
              <h3 className="text-xl">Design APIs</h3>
              <p>
                Create, edit, preview, lint, debug, and your OpenAPI specs all
                in one collaborative API editor.
              </p>
            </div>
            <div className="col-7">
              <Img
                sizes={data.previewImg.childImageSharp.sizes}
                alt="Document Listing"
              />
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-7">
              <Img
                sizes={data.generateConfigImg.childImageSharp.sizes}
                alt="Config Generation"
              />
            </div>
            <div className="col-5">
              <h3 className="text-xl">Generate Config</h3>
              <p>
                Generate your API Gateway configuration based on your OpenAPI
                specifications.
              </p>
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-5">
              <h3 className="text-xl">Write Tests</h3>
              <p>
                Create unit tests using JavaScript for your Insomnia debug
                requests, and run them in app or terminal to ensure your API
                works as expected.
              </p>
            </div>
            <div className="col-7">
              <Img
                sizes={data.writeTestsImg.childImageSharp.sizes}
                alt="Config Generation"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="light no-margin padding-bottom-lg padding-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2>More than 800,000 developers trust Insomnia</h2>
              <div className="padding-top">
                <Companies />
                <br />
                <br />
                <DownloadButton className="button--big">
                  Download App
                </DownloadButton>
                &nbsp;&nbsp;
                <Link
                  to="/teams"
                  className="button button--big button--no-outline">
                  Team Edition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark no-margin padding-bottom-lg padding-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2 className="text-xl">Still not convinced?</h2>
              <p>Maybe this big ol' list of features will help</p>
            </div>
          </div>
          <div className="row feature-list">
            <div className="col-6">
              <ul>
                <li>
                  <Link to="/graphql/">GraphQL</Link> support
                </li>
                <li>OAuth 1.0 and 2.0 auth</li>
                <li>Multipart form builder</li>
                <li>Query parameter builder</li>
                <li>Plugin System</li>
                <li>SSL client certificates</li>
                <li>JSONPath and XPath</li>
                <li>Response history</li>
                <li>Data import/export</li>
                <li>Rendered HTML preview</li>
                <li>Image and SVG preview</li>
                <li>AWS authentication</li>
                <li>Configurable proxy</li>
                <li>Color themes</li>
                <li>Cloud sync and sharing</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Import from <code style={{ color: '#333' }}>curl</code>
                </li>
                <li>Digest, Basic, NTLM Auth</li>
                <li>Nunjucks templating</li>
                <li>Configurable timeout</li>
                <li>HAR import</li>
                <li>Swagger import</li>
                <li>Request filtering</li>
                <li>Toggle SSL validation</li>
                <li>Keyboard shortcuts</li>
                <li>Usable at almost all sizes</li>
                <li>NTLM authentication</li>
                <li>Responsive interface</li>
                <li>Autocomplete Hints</li>
                <li>Redirect chain visualization</li>
                <li>Mac, Windows and Linux</li>
              </ul>
            </div>
          </div>
          <br />
          <div className="center">
            <p>Go on, give it a try. You won't regret it.</p>
            <br />
            <DownloadButton className="button--big" />
          </div>
          <br />
        </div>
      </section>
    </main>
  </React.Fragment>
);

export const pageQuery = graphql`
  query GatsbyImageQueryDesigner {
    mainImg: file(relativePath: { eq: "screens/main.png" }) {
      childImageSharp {
        sizes(maxWidth: 880) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    mainImg: file(relativePath: { eq: "screens/main.png" }) {
      childImageSharp {
        sizes(maxWidth: 880) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    templateImg: file(relativePath: { eq: "screens/template.png" }) {
      childImageSharp {
        sizes(maxWidth: 250) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    responsesImg: file(relativePath: { eq: "screens/responses.png" }) {
      childImageSharp {
        sizes(maxWidth: 250) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    dragImg: file(relativePath: { eq: "screens/drag.png" }) {
      childImageSharp {
        sizes(maxWidth: 250) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    previewImg: file(relativePath: { eq: "screens/big/preview.png" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    documentsImg: file(relativePath: { eq: "screens/big/documents.png" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    generateConfigImg: file(
      relativePath: { eq: "screens/big/generate_config.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    writeTestsImg: file(relativePath: { eq: "screens/big/unit_testing.png" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    environmentsImg: file(
      relativePath: { eq: "screens/big/environments.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    codeImg: file(relativePath: { eq: "screens/big/code.png" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
    themesImg: file(relativePath: { eq: "screens/big/themes.png" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes_withWebp_tracedSVG
        }
      }
    }
  }
`;
