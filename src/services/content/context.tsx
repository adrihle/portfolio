'use client'
import { createContext, useContext } from "react";

const TextContext = createContext<any>(null);

const PageTextsProvider = ({ children, text }: any) => {
  return (
    <TextContext.Provider value={text}>
      {children}
    </TextContext.Provider>
  );
};

function usePageTexts<T>(): T {
  const context = useContext(TextContext)
  if (!context) {
    throw new Error('no context');
  }
  return context;
};

export { PageTextsProvider, usePageTexts };
