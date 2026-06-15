import { Sala } from "../types/Sala";

export const salasIniciais: Sala[] = [
  {
    id: 1,
    nome: "Setor de Usinagem",
    acessoNecessario: 3,
    qtdPessoasComEpi: 5,
    qtdPessoasSemEpi: 0,
  },
  {
    id: 2,
    nome: "Linha de Montagem Principal",
    acessoNecessario: 1,
    qtdPessoasComEpi: 12,
    qtdPessoasSemEpi: 2,
  },
  {
    id: 3,
    nome: "Sala de Servidores",
    acessoNecessario: 4,
    qtdPessoasComEpi: 2,
    qtdPessoasSemEpi: 0,
  }
];