import {apiBase, apiKey} from '../../lib/tmdb'

export default async function trending(req, res) {
    const response = await fetch(`${apiBase}/search/movie/?api_key=${apiKey}&language=pt-BR&query=${req.query.value}`)
    const json = await response.json()
    
    res.status(200).json({ 
        list: json.results
    })
}