import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;