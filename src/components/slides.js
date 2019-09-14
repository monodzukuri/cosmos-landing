import React,{Component} from "react"
import {createGlobalStyle} from "styled-components"
import Helmet from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  /* CSS RESET */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, hr, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    border: 0;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  b, strong {
    font-weight: 600;
  }

  html {
    position: static !important;
    top: 0 !important;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* MAIN */
  html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  body {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  img {
    max-width: 100%;
    display: inline-block;
  }
  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    transition: 0.35s;
  }
`

export default class Slides extends Component{
  constructor(props) {
  super(props);
  this.state = {
      inAction: true,
      allowSlide: true,
      blockScroll: true,
      effectOffset: 500,
      effectSpeed: 1000,
      slideSpeed: 1000,
      cleanupDelay: 1400,
      horizontalMode: false,
      sidebarShown: false,
      smoothScroll: false,
      scrollSpeed: 0.5,
      setHashLink: true,
      hideSidebarOnBodyClick: true,
      collectScrolls: false,
      sliderStatus: false,
      minScrollToSlide: 500,
      minSwipeToSlide: 4,
      enableMobileZoom: false,
      hideOnScrollSensitivity: 100,
      allowParallaxOnMobile: true,
      hidePopupOnBodyClick: true,
      disableKeyNavigation: false,

      loaded:false,
      isScroll:false,
      isSimplifiedMobile:false
    }
  }
  async componentDidMount(){}
  render(){
    const {children} = this.props;
    return(
      <React.Fragment>
        <GlobalStyle />
        <Helmet>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <title>Clever Slides</title>

        </Helmet>
        {children}
      </React.Fragment>
    )
  }
}
