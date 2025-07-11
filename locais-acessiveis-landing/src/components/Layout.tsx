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
          <h1 className="text-4xl font-extrabold">Locais Acessíveis em Belo Horizonte-MG</h1>

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
