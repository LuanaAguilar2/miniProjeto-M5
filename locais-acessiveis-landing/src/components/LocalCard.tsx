import React from 'react';
import { Local } from '../interfaces/Local';

interface LocalCardProps {
  local: Local;
}

const LocalCard: React.FC<LocalCardProps> = ({ local }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-blue-700 mb-2">{local.nome}</h3>
      <p className="text-gray-600 mb-2">{local.endereco}</p>

      {/* Tags de acessibilidade */}
      <div className="flex flex-wrap gap-2 mb-4">
        {local.acessibilidades.map((item, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LocalCard;
