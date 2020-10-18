import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"
import * as API from "../utils/api"

export interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Glory Jewellery - Özel Tasarım Takı</title>
        <meta name="title" content="Glory Jewellery - Özel Tasarım Takı" />
        <meta name="description" content="Özel tasarım özenle seçilmiş metaryallerle tasarlanan takılarımızla kendinizi şımartın." />
        <meta property="og:image" content={props.products[0].image}/>
        <meta property="og:url" content="https://gloryjewelleryy.com"/>
        <meta name="twitter:card" content="summary_large_image"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gloryjewelleryy.com" />
        <meta property="og:title" content="Glory Jewellery - Özel Tasarım Takı" />
        <meta property="og:description" content="Özel tasarım özenle seçilmiş metaryallerle tasarlanan takılarımızla kendinizi şımartın." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gloryjewelleryy.com/" />
        <meta property="twitter:title" content="Glory Jewellery - Özel Tasarım Takı" />
        <meta property="twitter:description" content="Özel tasarım özenle seçilmiş metaryallerle tasarlanan takılarımızla kendinizi şımartın." />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-MB7Z4ZXDQQ'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-MB7Z4ZXDQQ');
              `
          }}>
        </script>
      </Head>
      <Header />
      <main className="main">
        <img src="/background-jew.png" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>GLORY</h3>
          <h2>Jewellery</h2>
          <p>En <strong>güzel takılar</strong> bir tık uzağınızda.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await API.getJewelleryList()
  const jewelleryList = await res.json()
  return {
    revalidate: 15,
    props: {
      products: jewelleryList
    }
  }
}


export default Index