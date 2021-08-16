import {apiBase, apiKey} from '../../../lib/tmdb'

export default async function movie(req, res) {
    const id = req.query.id
    const response = await fetch(`${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`)
    const json = await response.json()

    res.status(200).json({ 
        data: json
    })
}