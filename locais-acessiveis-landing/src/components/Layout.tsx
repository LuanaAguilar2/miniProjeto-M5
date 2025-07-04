// src/components/Layout.tsx
//import React from 'react';
"use client";

import React, { useState } from 'react'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
     <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Cabeçalho */}
      <header className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-extrabold">Locais Acessíveis</h1>

          {/* Barra de Pesquisa */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar locais..."
              className="py-2 pl-10 pr-4 rounded-full bg-blue-600 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white focus:text-gray-800 transition-all duration-300 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Ícone de Busca */}
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200 focus:text-gray-500" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.07.41 1.48 0 .41-.41.41-1.07 0-1.48L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>

          {/* Navegação */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
              <li><a href="#locais" className="hover:text-blue-200 transition-colors duration-300">Locais</a></li>
              <li><a href="#avaliacoes" className="hover:text-blue-200 transition-colors duration-300">Avaliações</a></li>
              {/* O link para #ranking foi removido */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main>{children}</main>
      {/* Rodapé */}
      <footer className="bg-gray-900 text-white p-8 text-center mt-16">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Locais Acessíveis. Todos os direitos reservados.</p>
          <p className="mt-3 text-sm text-gray-400">
            Desenvolvido com ❤️ usando Next.js, React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
