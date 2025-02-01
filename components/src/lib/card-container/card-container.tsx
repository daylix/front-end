import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className="card bg-base-100 shadow-xl max-w-[640px] mx-auto mb-4 mt-4">
      <div className={`card-body p-4 sm:p-6 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default CardContainer;