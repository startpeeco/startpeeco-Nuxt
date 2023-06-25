import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navigation-links-text">{props.text}</span>
        <span className="navigation-links-text1">{props.text1}</span>
        <span className="navigation-links-text2">{props.text2}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text {
            color: #ffffff;
          }
          .navigation-links-text1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text2 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links-nav {
              align-items: center;
            }
            .navigation-links-text {
              color: #060606;
              font-size: 26px;
            }
            .navigation-links-text1 {
              color: #0c0c0c;
              font-size: 26px;
            }
            .navigation-links-text2 {
              color: #020202;
              font-size: 26px;
            }
            .navigation-links-root-class-name14 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Team',
  text2: 'Ver exemplo',
  text: 'Quem somos',
  text1: 'visitar loja',
  text4: 'Blog',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
