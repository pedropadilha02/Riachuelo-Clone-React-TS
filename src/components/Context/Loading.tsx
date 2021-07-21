import { createContext, useContext, useState } from "react";


const LoadingContext = createContext<any>(false);

export function LoadingProvider({children}: any) {
    const [loadingView, setLoadingView] = useState<string>('');

    return(
        <LoadingContext.Provider value={{loadingView, setLoadingView}}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext);