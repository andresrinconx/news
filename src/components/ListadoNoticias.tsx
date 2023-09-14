import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

const ListadoNoticias = () => {
  const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
  const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
      <Typography
        textAlign={'center'}
        variant={'h3'}
        component={'h2'}
        marginY={5}
      >
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia: {url: string, title: string, description: string, publishedAt: string, urlToImage: string}) => {
          return (
            <Noticia
              key={noticia.url}
              noticia={noticia}
            />
          )
        })}
      </Grid>

      <Stack
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{marginY: 5}}
      >
        <Pagination 
          count={totalPaginas} 
          color='primary' 
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  )
}

export default ListadoNoticias
