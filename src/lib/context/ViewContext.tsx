'use client'
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface ViewStateType {
  viewState: boolean;
  toggleView: () => void;
  transition: boolean;
  stationRef: any
  setStationRef: (ref: any) =>void;
}

export const ViewStateContext = createContext<ViewStateType | undefined>(
  undefined
);

export const ViewStateProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const path = usePathname()
  const router = useRouter()
  const sref = useRef(); // Referencia para el div
  const [stationRef, setStationRef] = useState(sref)
  const [viewState, setViewState] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false)
  const toggleView = () => {
    setTransition(!transition);
    setTimeout(() => {
      setViewState(!viewState);
      setTransition(false)
      router.push("/")
    }, 2000);
  };
  useEffect(() => {
    console.log(path)
    if(path === "/landing" || path.includes("projectDetail")){
      setViewState(true)
    }else{
      console.log(path)
      setViewState(false)

    }
  }, [path])
  
  const value: ViewStateType = { viewState, toggleView, transition, stationRef, setStationRef };

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
