import React from 'react'
import Head from 'next/head'

const Loja = (props) => {
  return (
    <>
      <div className="loja-container">
        <Head>
          <title>loja - FOTO10X</title>
          <meta property="og:title" content="loja - FOTO10X" />
          <meta
            property="og:description"
            content=" #1 plataforma de serviço de fotografia de produtos "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/48fe9e0c-ccd0-4d95-af84-9228a0a26b9d/c64238a0-d6de-4519-a3d1-0c119942f9db?org_if_sml=1"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .loja-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Loja
