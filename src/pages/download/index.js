import React from 'react';
import Img from 'gatsby-image';
import SocialCards from '../../components/social-cards';
import Contributors from '../../partials/contributors';
import Title from '../../partials/title';
import DirectDownloadButton from '../../components/direct-download-button';
import Link from '../../components/link';

export default class extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <React.Fragment>
        <Title>Download</Title>
        <SocialCards
          title="Downloads | Insomnia"
          summary="Download Insomnia Applications"
          isBanner
        />
        <div className="row downloads container">
          <article className="col-6">
            <header className="header--big">
              <div className="row">
                <div className="col-12">
                  <h1 className="no-wrap">Insomnia Designer</h1>
                  <p className="text-lg" style={{height: '2rem', overflow: 'visible'}}>
                    Collaborative API design with
                    {' '}
                    <Link to="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</Link>
                  </p>
                </div>
              </div>
            </header>
            <div className="platform-download center padding-bottom">
              <Img sizes={data.screenDesigner.childImageSharp.sizes} className="platform-download__img" alt="Insomnia Designer"/>
              <p>
                <DirectDownloadButton app="com.insomnia.designer" className="button--big" />
              </p>
            </div>
          </article>
          <article className="col-6">
            <header className="header--big">
              <div className="row">
                <div className="col-12">
                  <h1 className="no-wrap">Insomnia Core</h1>
                  <p className="text-lg" style={{height: '2rem', overflow: 'visible'}}>
                    Explore <code>REST</code> and GraphQL APIs
                  </p>
                </div>
              </div>
            </header>
            <div className="platform-download center padding-bottom">
              <Img sizes={data.screenCore.childImageSharp.sizes} className="platform-download__img" alt="Insomnia Core"/>
              <p>
                <DirectDownloadButton app="com.insomnia.app" className="button--big" />
              </p>
            </div>
          </article>
        </div>
        <Contributors />
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query GatsbyImageQuery {
    screenCore: file(relativePath: { eq: "screens/big/insomnia-core.png" }) {
      childImageSharp {
        sizes(maxWidth: 880) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    screenDesigner: file(relativePath: { eq: "screens/big/insomnia-designer.png" }) {
      childImageSharp {
        sizes(maxWidth: 880) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
