import { Avaliacao } from "@/interfaces/Avaliacao";
import { Local } from "@/interfaces/Local";

const API_BASE_URL = 'http://localhost:3000/api';

export const fetchLocal = async (): Promise<Local[]> => {
  const response = await fetch(`${API_BASE_URL}/locais-acessiveis`); // Rota para todos os locais
  if (!response.ok) {
    throw new Error('Falha ao buscar local');
  }
  const data = await response.json();
  return data; // Assumindo que a API retorna um array de Location diretamente
};

export const fetchRecentAvaliacao = async (): Promise<Avaliacao[]> => {
  const response = await fetch(`${API_BASE_URL}/avaliacoes/:idLocal/comentarios`); // Rota para comentários com id
  if (!response.ok) {
    throw new Error('Falha ao obter avaliação recente');
  }
  const data = await response.json();
  return data; // Assumindo que a API retorna um array de Review diretamente
};

export const fetchlocalMaisAvaliado = async (): Promise<Local[]> => {
  const response = await fetch(`${API_BASE_URL}/locais-acessiveis/mais-avaliados`); // Rota para locais mais bem avaliados
  if (!response.ok) {
    throw new Error('Falha ao buscar o local mais bem avaliado');
  }
  const data = await response.json();
  return data; // Assumindo que a API retorna um array de Location diretamente
};