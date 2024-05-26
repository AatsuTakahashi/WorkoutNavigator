import React, { createContext, useContext, useState, ReactNode } from 'react';

// フォームデータのタイプを定義
type FormData = {
  title: string;
  content: string;
  others: string;
  date: Date | null;
};

type FormContextType = {
  formData: FormData | null;
  setFormData: (data: FormData) => void;
};

// デフォルト値を設定
const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormProvider');
  }
  return context;
};
