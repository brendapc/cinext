import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({list}) {
  const [searchText, setSearchText] = useState('')
  const [movieList, setMovieList] = useState([])

  //client side render
  const handleSearch = async () =>{
    if(searchText !== ''){
      const result = await fetch(`http://localhost:3000/api/search?value=${searchText}`)
      const json = await result.json()
      setMovieList(json.list)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1 className="title">Buscar</h1>
          <Link href="/">Início</Link>
          <input type="text" value={searchText} onChange={ e => setSearchText(e.target.value)} />
          buscando por {searchText}
          <button onClick={handleSearch}>Buscar</button>
          <hr />
          <ul>
            {movieList.map((movie)=>{
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
