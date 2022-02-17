import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { GetStaticProps } from 'next';

import styles from './home.module.scss'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({product} : HomeProps) {
  return (
    <>

      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome!</span>
          <h1>News about the <br />
          <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month subscription</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>

    </>
  )
}

//Essa função abaixo está sendo executada no lado do node (back-end) que roda no next junto com nossa app, 
// com ela nós vamos conseguir acessar as informações deste server-side para o front

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KRRPmLJM8tOEvaVFsOD7ibN')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
    
  }

    return {
    props: { 
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hrs
  }
}