import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1 className="title">Filmes em destaque</h1>
          <Link href="/buscar">Buscar</Link>
          <ul>
            {list.map((movie)=>{
              return (
                <a href={`/movie/${movie.id}`} key={movie.title}>
                  <li >
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" width="150" />
                    <p>{movie.title}</p>
                  </li>
                </a>
              )
          })}
          </ul>
      </main>
    </div>
  )
}

// server-side rendered
export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/trending')
  const json = await res.json()

  return {
    props: {
      list: json.list
    }
  }
}