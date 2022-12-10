import type { DocumentContext, DocumentInitialProps } from "next/document"
import Document, { Head, Html, Main, NextScript } from "next/document"
import type { ReactElement } from "react"

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

//  FIXME: Add the title tag in app.js to fix the warning
    render(): ReactElement {
        return(
            <Html lang="en">
                <Head>
                    <title>babOS</title>
                    <meta name="description" content="Desktop Enviornment in a browser"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

    export default MyDocument