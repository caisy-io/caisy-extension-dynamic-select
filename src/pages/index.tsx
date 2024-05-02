import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { SelectWithDynamicData } from '../components/select'

export default function Home() {
  return (
    <>
      <Head>
        <title>caisy code editor extension</title>
        <meta name="description" content="code editor extension for caisy headless cms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
          <SelectWithDynamicData />
      </main>
    </>
  )
}
