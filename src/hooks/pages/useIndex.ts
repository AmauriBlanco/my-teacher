import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([]),
    [nome, setNome] = useState(""),
    [email, setEmail] = useState(""),
    [professorSelecionado, setProfessorSelecionado] =
      useState<Professor | null>(null),
    [mensagem, setMensagem] = useState('');

  useEffect(() => {
    ApiService.get("/professores").then((resposta) => {
      setListaProfessores(resposta.data);
    });
  }, []);

  useEffect(()=> {
    limparFormulario();
  },[professorSelecionado])

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validarDadosAula()) {
        ApiService.post("/professores/" + professorSelecionado.id + "/aulas", {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            setMensagem("Cadastrado com sucesso");
          })
          .catch((error) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosAula() {
    return nome.length > 0 && email.length > 0;
  }

  function limparFormulario() {
    setNome('');
    setEmail('');
  }

  return {
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
  };
}
