import {apiBase, apiKey} from '../../lib/tmdb'

export default async function trending(req, res) {
    const response = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
    const json = await response.json()
    
    res.status(200).json({ 
        list: json.results
    })
  }