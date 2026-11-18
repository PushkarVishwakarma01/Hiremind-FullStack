import { createContext, useReducer } from "react";

export const AIContext = createContext();

const initialState = {
  activeTab: "chat",

  loading: false,

  messages: [],

  recommendations: [],

  resume: {
    score: 92,
    missingSkills: [],
    suggestions: [],
  },

  interview: {
    readiness: 84,
    questions: [],
    currentQuestion: null,
  },

  selectedJob: null,

  lastAction: null,
};

function AIReducer(state, action) {
  switch (action.type) {
    case "SET_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "SET_RECOMMENDATIONS":
      return {
        ...state,
        recommendations: action.payload,
      };

    case "SET_RESUME":
      return {
        ...state,
        resume: action.payload,
      };

    case "SET_INTERVIEW":
      return {
        ...state,
        interview: action.payload,
      };

    case "SET_SELECTED_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };

    case "SET_ACTION":
      return {
        ...state,
        lastAction: action.payload,
      };

    default:
      return state;
  }
}

export function AIProvider({ children }) {
  const [state, dispatch] = useReducer(
    AIReducer,
    initialState
  );

  return (
    <AIContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AIContext.Provider>
  );
}