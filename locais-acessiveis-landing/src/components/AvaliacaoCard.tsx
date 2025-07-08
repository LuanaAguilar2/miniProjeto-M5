'use client';

import React, { useState } from 'react';
import { Avaliacao } from '../interfaces/Avaliacao';

interface AvaliacaoCardProps {
  avaliacao: Avaliacao;
}

const ReviewCard: React.FC<AvaliacaoCardProps> = ({ avaliacao }) => {
  const [expandir, setExpandir] = useState(false);

  const stars = '⭐'.repeat(avaliacao.nota);

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  function formatarDataString(data: string) {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
  }

  let formattedDate = 'Data inválida';

  if (avaliacao.data) {
    const dataFormatada = formatarDataString(avaliacao.data);
    const dataObj = new Date(dataFormatada);

    if (!isNaN(dataObj.getTime())) {
      formattedDate = dataObj.toLocaleDateString('pt-BR', dateOptions);
    }
  }

  const comentario = typeof avaliacao.comentario === 'string' ? avaliacao.comentario : '';
  const comentarioCurto = comentario.substring(0, 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
      {/* Exibe o nome do local */}
      <h3 className="font-bold text-lg text-gray-900 mb-1">{avaliacao.locais}</h3>

      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800">{avaliacao.usuario}</span>
        <span className="text-yellow-500">{stars}</span>
      </div>

      <p className="text-gray-700 text-sm italic mb-3">
        "{expandir || comentario.length <= 100 ? comentario : comentarioCurto + '...'}"
        {comentario.length > 100 && (
          <button
            className="text-blue-600 ml-1 underline"
            onClick={() => setExpandir(!expandir)}
          >
            {expandir ? ' Ver menos' : ' Ver mais'}
          </button>
        )}
      </p>

      <p className="text-gray-500 text-xs text-right">{formattedDate}</p>
    </div>
  );
};

export default ReviewCard;
