import { ref, push, set } from 'firebase/database';
import { database } from './firebase';


export async function enviarInscricao(data: {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  genero: string;
  identificacao: string;
  tipoPercurso: string;
  observacoes: string;
  aceitaRegulamento: boolean;
  aceitaPolitica: boolean;
  jaPagou: number;
}) {
  const inscricoesRef = ref(database, 'inscricoes');
  const novaInscricaoRef = push(inscricoesRef);

  await set(novaInscricaoRef, {
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
    dataNascimento: data.dataNascimento,
    genero: data.genero,
    identificacao: data.identificacao,
    tipoPercurso: data.tipoPercurso,
    observacoes: data.observacoes,
    aceitaRegulamento: data.aceitaRegulamento,
    aceitaPolitica: data.aceitaPolitica,
    dataEnvio: new Date().toISOString(),
    jaPagou: data.jaPagou,
  });


   

  return novaInscricaoRef.key;
}
