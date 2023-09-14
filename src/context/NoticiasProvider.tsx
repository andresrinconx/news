import axios from "axios"
import { createContext, useState, useEffect } from "react"

const NoticiasContext = createContext<{
  categoria: string
  handleChangeCategoria: (e: any) => void
  noticias: any[]
  totalNoticias: number
  handleChangePagina: (e: any, valor: number) => void
  pagina: number
}>({
  categoria: 'general',
  handleChangeCategoria: () => {},
  noticias: [],
  totalNoticias: 0,
  handleChangePagina: () => {},
  pagina: 1
})

export const NoticiasProvider = ({children}: {children: React.ReactNode}) => {
  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

      const {data} = await axios(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      setPagina(1)
    }
    consultarApi()
  }, [categoria])

  useEffect(() => {  
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

      const {data} = await axios(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
    }
    consultarApi()
  }, [pagina])

  const handleChangeCategoria = (e: any) => {
    setCategoria(e.target.value)
  }

  const handleChangePagina = (e: any, valor: number) => {
    setPagina(valor)
  }
  
  return (
  <NoticiasContext.Provider value={{
    categoria,
    handleChangeCategoria,
    noticias,
    totalNoticias,
    handleChangePagina,
    pagina
  }}>
    {children}
  </NoticiasContext.Provider>
  )
}

export default NoticiasContext