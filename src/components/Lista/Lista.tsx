import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import {
  Descricao,
  Foto,
  Informacoes,
  ItemLista,
  ListaVazia,
  ListStyled,
  Nome,
  Valor,
} from "./Lista.style";

interface ListaProps {
  professores: Professor[],
  onSelect: (professor: Professor) => void
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListStyled>
          {props.professores.map((professor) => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto} />
              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                <Descricao>{FormatadorService.limitarTexto(professor.descricao, 50)}</Descricao>
                <Button onClick={()=> props.onSelect(professor)} variant={"contained"} sx={{ width: "70%" }}>
                  Marcar Aula com {professor.nome}
                </Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListStyled>
      ) : (
        <ListaVazia>Nenhum item encontrado</ListaVazia>
      )}
    </div>
  );
};

export default Lista;
