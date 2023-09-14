import {Container, Grid, Typography} from '@mui/material'
import Formulario from './components/Formulario'
import { NoticiasProvider } from './context/NoticiasProvider'
import ListadoNoticias from './components/ListadoNoticias'

const App = () => {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography variant="h3" component="h1" align='center' marginY={5}>
            Buscador De Noticias
          </Typography>
        </header>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Formulario />
          </Grid>
        </Grid>
        
        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  )
}

export default App