import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'


export default function Home() {
  return (
    <>
      <Head><title>Home | Ignews</title></Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> World.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
            
        </section>

        <img src="/images/avatar.svg" alt="Girl Codding" />
      </main>
    </>
  )
}
