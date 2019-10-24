import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Document, { Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} /> ));
        const styledTags = sheet.getStyleElement();
        return { ...page, helmet: Helmet.renderStatic(), styledTags }
    }

    render() {
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        //console.log( "helmet : ", helmet);

        return(
            <html {...htmlAttrs}>
                <head>
                    {this.props.styledTags}
                    {Object.values(helmet).map( el => el.toComponent())}
                </head>
                <body {...bodyAttrs}>
                    <Main />
                    {process.env.NODE_ENV === 'production'
                    && <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />}
                    <NextScript />
                </body>
            </html>
        )
    }
}

MyDocument.propTypes = {
    helmet: PropTypes.object.isRequired,
    styledTags: PropTypes.object.isRequired,
}

export default MyDocument;