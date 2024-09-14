'use client'
import { createContext, useContext, useState } from "react";

interface ViewStateType {
  viewState: boolean;
  toggleView: () => void;
  transition: boolean;
}

export const ViewStateContext = createContext<ViewStateType | undefined>(
  undefined
);

export const ViewStateProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [viewState, setViewState] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false)
  const toggleView = () => {
    setTransition(!transition);
    setTimeout(() => {
      setViewState(!viewState);
      setTransition(false)
    }, 2800);
  };

  const value: ViewStateType = { viewState, toggleView, transition };

  return (
    <ViewStateContext.Provider value={value}>
      {children}
    </ViewStateContext.Provider>
  );
};

export const useViewContext = () => {
  const context = useContext(ViewStateContext);
  if (context === undefined) {
    throw new Error(
      "useProfileCompletion must be used within a ProfileCompletionProvider"
    );
  }
  return context;
};
