import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // Esto aplica para todas las páginas
  // Es a nivel de servidor

  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* Sirve para */}
          {/* Favicon */}
          {/* Web fonts */}
          {/* Styles */}
          {/* scripts/js */}
        </Head>

        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;