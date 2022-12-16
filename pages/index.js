import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout.js';

import { getOrderedList } from '../lib/data';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const allPeople = await getOrderedList();
  return{
    props: {
      allPeople
    }
  }
}

export default function Home({ allPeople }) {
  return (
    <Layout home>
      <h1 className={styles.title}>
        Sort of a Wizard Related Blog 
      </h1>

      <p className={styles.description}>
        Mischief managed using a Next.js framework with PHP and SQL to query a WordPress Database
      </p>

      <div className="list-group">
        {allPeople.map(({ id, name}) => (
          <Link  key={id} href={`/${id}`}>
            <a className="list-group-item list-group-item-action"> {name} </a> 
          </Link>
        ))}
      </div>
    </Layout>
  )
}
