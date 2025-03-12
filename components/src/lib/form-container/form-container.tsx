import React from 'react';
import CardContainer from '../card-container';

interface FormContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ 
  children,
  className = '',
  title
}) => {
  return (
    <div className="container mx-auto px-4 py-4 min-h-[calc(100vh-120px)] flex items-start justify-center md:pt-[15vh]">
      <CardContainer className={`text-gray-200 p-5 rounded-[24px] w-full min-w-[300px] sm:min-w-[400px] sm:!max-w-[480px] ${className}`}>
        {title && (
          <h1 className="text-2xl font-semibold text-center mb-6 text-white">
            {title}
          </h1>
        )}
        {children}
      </CardContainer>
    </div>
  );
};

export default FormContainer;
