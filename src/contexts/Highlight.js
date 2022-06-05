import { useReducer, createContext, useMemo } from "react";

export const HighlightContext = createContext();

const reducer = (state, action) => {
// reducer will only cause a re-render if it returns a new / changed state
switch(action.type) {
    case 'ready': {
    return {
        ...state,
        image: action.payload
    };
    }
    default: return state;
}
}
const initial = {
    image: undefined,
};
export const HighlightProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initial);
    const value = useMemo(() => {
        return {
        state,
        dispatch,
        };
    }, [state, dispatch]);
    return (
        <HighlightContext.Provider value={value}>
            {children}
        </HighlightContext.Provider>
    )
}