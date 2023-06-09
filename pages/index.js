import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavigationLinks from '../components/navigation-links'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>FOTO10X</title>
          <meta property="og:title" content="FOTO10X" />
          <meta
            property="og:description"
            content=" #1 plataforma de serviço de fotografia de produtos "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/48fe9e0c-ccd0-4d95-af84-9228a0a26b9d/c64238a0-d6de-4519-a3d1-0c119942f9db?org_if_sml=1"
          />
        </Head>
        <header data-role="Header" className="home-header">
          <div className="home-container1">
            <img alt="logo" src="/logo10x-200h.png" className="home-image" />
            <div className="home-nav">
              <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
            </div>
          </div>
          <a href="https://www.foto10x.shop/" className="home-link">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
            </svg>
          </a>
          <div className="home-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=5511967272695"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1 button"
            >
              Continuar
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <nav className="home-nav1">
              <div className="home-container2">
                <img
                  alt="image"
                  src="/logo%20(2)-1500h.png"
                  className="home-image1"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container3">
                <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
              </div>
            </nav>
          </div>
        </header>
        <div className="home-hero">
          <img
            alt="image"
            src="/external/foto10x%20frente-1500h.webp"
            className="home-image2"
          />
          <div className="home-container4">
            <h1 className="home-text">
              Fotografia de  produtos
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="home-text01">
              Fotos de produtos que chama atenção
            </span>
            <div className="home-btn-group1">
              <a
                href="https://api.whatsapp.com/send?phone=5511967272695"
                className="home-link2 button"
              >
                Eu quero
              </a>
              <button className="home-button button">Ver exemplo</button>
            </div>
          </div>
        </div>
        <div className="home-div">
          <Script
            html={`<storifyme-collection account="g-francisco-junior-70482" widget="6913" env="eu"></storifyme-collection>`}
          ></Script>
        </div>
        <footer className="home-footer">
          <div className="home-container5">
            <div className="home-logo">
              <img
                alt="logo"
                src="/logo%20(2)-1500h.png"
                className="home-image3"
              />
              <span className="home-text02">excelência  sempre</span>
            </div>
            <div className="home-links-container">
              <div className="home-container6">
                <div className="home-product-container">
                  <span className="home-text03">Produto</span>
                  <span className="home-text04">Loja</span>
                  <span className="home-text05">Serviços</span>
                </div>
                <div className="home-company-container">
                  <span className="home-text06">Empresa</span>
                  <span className="home-text07">Sobre</span>
                  <span className="home-text08">seja parceiro</span>
                </div>
              </div>
              <div className="home-container7">
                <div className="home-contact">
                  <span className="home-text09">Nosso contato</span>
                  <span>(11) 967272695</span>
                </div>
                <div className="home-socials">
                  <div className="home-icon-group">
                    <a
                      href="https://www.instagram.com/foto10x/"
                      className="home-link3"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon06"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCUITY0N1esWHe9s9ngfG4Ig"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link4"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/showcase/94837379/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link5"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@foto10x"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link6"
                    >
                      <img
                        src="/external/3938074-200h.png"
                        alt="image"
                        className="home-image4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <span className="home-text11">© 2023 By startpee FOTO10X</span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #020201;
          }
          .home-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            width: 121px;
            height: 71px;
          }
          .home-nav {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-icon {
            fill: #ffffff;
            width: 60px;
            height: 48px;
            margin-left: 400px;
            text-decoration: none;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image2 {
            width: 500px;
            margin: var(--dl-space-space-oneandhalfunits);
            object-fit: cover;
          }
          .home-container4 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .home-text01 {
            font-size: 22px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-twounits);
            background-color: rgb(255, 236, 0);
          }
          .home-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link2 {
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-button {
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button:hover {
            border-color: var(--dl-color-gray-black);
          }
          .home-div {
            width: 100%;
            height: 100%;
            margin-top: 50px;
            margin-bottom: 50px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image3 {
            width: 320px;
            height: 178px;
          }
          .home-text02 {
            font-size: 29px;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container6 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text03 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text06 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container7 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text09 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-socials {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon-group {
            display: flex;
            margin-top: 19px;
            align-items: center;
            margin-bottom: 19px;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link3 {
            display: contents;
          }
          .home-icon06 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link4 {
            display: contents;
          }
          .home-icon08 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            text-decoration: none;
          }
          .home-link5 {
            display: contents;
          }
          .home-icon10 {
            width: 42px;
            height: 42px;
            margin: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-link6 {
            display: contents;
          }
          .home-image4 {
            width: 42px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-text11 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .home-icon {
              fill: #ffffff;
              width: 59px;
              height: 46px;
              margin-left: 190px;
            }
            .home-icon02 {
              display: flex;
            }
            .home-hero {
              flex-direction: column;
            }
            .home-container4 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container6 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-icon {
              fill: #ffffff;
              width: 75px;
              height: 44px;
              margin-left: 400px;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-white);
              width: 100px;
              height: 33px;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image2 {
              width: 80%;
              margin: var(--dl-space-space-oneandhalfunits);
            }
            .home-text01 {
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              background-color: rgb(255, 236, 0);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-logo {
              align-items: center;
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text02 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-container6 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-container7 {
              align-items: center;
            }
            .home-socials {
              align-items: center;
            }
            .home-icon08 {
              margin-left: 10px;
              margin-right: 10px;
            }
            .home-icon10 {
              margin: 10px;
            }
            .home-image4 {
              width: 42px;
              margin-left: 10px;
              margin-right: 10px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-nav {
              display: none;
              align-items: flex-start;
            }
            .home-icon {
              fill: #ffffff;
              width: 61px;
              height: 36px;
              margin-left: 200px;
            }
            .home-icon02 {
              fill: #ffffff;
              width: 52px;
              height: 29px;
            }
            .home-mobile-menu {
              display: none;
              padding: 16px;
            }
            .home-nav1 {
              align-self: center;
              align-items: center;
            }
            .home-image1 {
              width: 236px;
              height: auto;
              margin-left: 11px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container4 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              font-size: 3rem;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .home-btn-group1 {
              flex-direction: column;
            }
            .home-button {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
            }
            .home-image3 {
              margin-bottom: 0px;
            }
            .home-text02 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              margin-top: 100px;
              align-items: center;
              flex-direction: column;
            }
            .home-container6 {
              margin-right: 0px;
            }
            .home-container7 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              margin-bottom: 0px;
            }
            .home-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-socials {
              align-items: center;
            }
            .home-icon06 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-icon08 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-text11 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
