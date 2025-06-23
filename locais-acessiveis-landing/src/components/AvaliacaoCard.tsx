import React from 'react';
import { Avaliacao } from '../interfaces/Avaliacao';

interface AvaliacaoCardProps {
  avaliacao: Avaliacao;
}

const ReviewCard: React.FC<AvaliacaoCardProps> = ({ avaliacao }) => {
  const stars = '⭐'.repeat(avaliacao.nota);

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = new Date(avaliacao.data).toLocaleDateString('pt-BR', dateOptions);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800">{avaliacao.usuario}</span>
        <span className="text-yellow-500">{stars}</span>
      </div>

      {/* Comentário com verificação de tipo */}
      <p className="text-gray-700 text-sm italic mb-3">
        "{typeof avaliacao.comentario === 'string' && avaliacao.comentario.length > 100
          ? avaliacao.comentario.substring(0, 100) + '...'
          : avaliacao.comentario}"
      </p>

      <p className="text-gray-500 text-xs text-right">{formattedDate}</p>
    </div>
  );
};

export default ReviewCard;
