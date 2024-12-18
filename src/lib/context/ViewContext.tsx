'use client'
import { createContext, useContext, useRef, useState } from "react";

interface ViewStateType {
  viewState: boolean;
  toggleView: () => void;
  transition: boolean;
  stationRef: any
}

export const ViewStateContext = createContext<ViewStateType | undefined>(
  undefined
);

export const ViewStateProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const stationRef = useRef(); // Referencia para el div
  const [viewState, setViewState] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false)
  const toggleView = () => {
    setTransition(!transition);
    setTimeout(() => {
      setViewState(!viewState);
      setTransition(false)
    }, 2800);
  };

  const value: ViewStateType = { viewState, toggleView, transition, stationRef };

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
