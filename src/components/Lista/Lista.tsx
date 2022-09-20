import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
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
  professores: Professor[];
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
                <Valor>
                  {professor.valor_hora.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </Valor>
                <Descricao>{professor.descricao}</Descricao>
                <Button variant={"contained"} sx={{ width: "70%" }}>
                  Marcar Aula com Amauri
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
