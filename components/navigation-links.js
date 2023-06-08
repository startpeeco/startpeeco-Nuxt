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
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Team',
  text2: 'Fotos que vende',
  text: 'Quem somos',
  text1: 'loja',
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
