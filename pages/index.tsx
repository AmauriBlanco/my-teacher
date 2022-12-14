import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Cabecalho from "../src/components/Cabecalho/Cabecalho";
import Lista from "../src/components/Lista/Lista";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaProfessores,
    nome,
    setEmail,
    email,
    setNome,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem,
  } = useIndex();

  return (
    <>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Lista
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
        ></Lista>
      </Box>

      <Dialog
        onClose={() => setProfessorSelecionado(null)}
        open={professorSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Digite o email"
              type="text"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setProfessorSelecionado(null)}>
            Cancelar
          </Button>
          <Button onClick={()=> marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar message={mensagem} open={mensagem.length > 0} autoHideDuration={4000} onClose={()=> setMensagem('')}/>
    </>
  );
};

export default Home;
