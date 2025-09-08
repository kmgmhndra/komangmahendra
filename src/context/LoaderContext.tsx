// src/context/LoaderContext.tsx

'use client';

import React, { createContext, useState, ReactNode } from 'react';

// Definisikan tipe untuk context kita
interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Buat context dengan nilai default
export const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

// Buat komponen "Provider" yang akan membungkus aplikasi kita
export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true); // State yang akan kita buat global

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};