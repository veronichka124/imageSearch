import React, { createContext, useState, useContext, ReactNode } from "react";

interface KeywordContextProps {
  keyword: string;
  setKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const KeywordContext = createContext<KeywordContextProps | undefined>(
  undefined
);

const KeywordContextProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeywordState] = useState("");

  const setKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywordState(e.target.value);
  };

  return (
    <KeywordContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </KeywordContext.Provider>
  );
};

const useKeywordContext = () => {
  const context = useContext(KeywordContext);
  if (context === undefined) {
    throw new Error(
      "useKeywordContext must be used within a KeywordContextProvider"
    );
  }
  return context;
};

export { KeywordContextProvider, useKeywordContext, KeywordContext };
