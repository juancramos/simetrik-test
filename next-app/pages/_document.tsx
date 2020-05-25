import Document, { Head, Main, NextScript, DocumentProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface MyDocumentProps extends DocumentProps {
  styleTags: any;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
