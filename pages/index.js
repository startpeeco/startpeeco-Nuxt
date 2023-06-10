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
          <div className="home-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=5511967272695"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              Continuar
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
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
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
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
          <img alt="image" src="/foto10-1500h.jpg" className="home-image2" />
          <div className="home-container4">
            <h1 className="home-text">
              <span>
                Aprenda tirar fotos chamativas dos seus produtos
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text02">Com o celular</span>
            </h1>
            <span className="home-text03">
              Consultoria de Grátis para te ajudar vender online
            </span>
            <div className="home-btn-group1">
              <a
                href="https://api.whatsapp.com/send?phone=5511967272695"
                className="home-link1 button"
              >
                Eu quero
              </a>
              <button className="home-button button">Assistir video</button>
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
              <span className="home-text04">excelência  sempre</span>
            </div>
            <div className="home-links-container">
              <div className="home-container6">
                <div className="home-product-container">
                  <span className="home-text05">Produto</span>
                  <span className="home-text06">Loja</span>
                  <span className="home-text07">Serviços</span>
                </div>
                <div className="home-company-container">
                  <span className="home-text08">Empresa</span>
                  <span className="home-text09">Sobre</span>
                  <span className="home-text10">seja parceiro</span>
                  <span className="home-text11">Contato</span>
                </div>
              </div>
              <div className="home-container7">
                <div className="home-contact">
                  <span className="home-text12">Nosso contato</span>
                  <span>(11) 967272695</span>
                </div>
                <div className="home-socials">
                  <span className="home-text14">Segue nós</span>
                  <div className="home-icon-group">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon4"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="home-icon6">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <span className="home-text15">© 2023 By startpee FOTO10X</span>
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
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
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
          .home-icon2 {
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
          .home-text02 {
            background-color: rgb(255, 236, 0);
          }
          .home-text03 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link1 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-button {
            transition: 0.3s;
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
          .home-text04 {
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
          .home-text05 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text08 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
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
          .home-text12 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-socials {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon6 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-text15 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .home-icon {
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
            .home-text03 {
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
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-icon {
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
            }
            .home-text03 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
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
            .home-text04 {
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
              font-size: 1.6rem;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            .home-text02 {
              background-color: rgb(255, 236, 0);
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
            .home-text04 {
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
            .home-icon4 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-icon6 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-text15 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
