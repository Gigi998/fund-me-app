import { createContext } from "react";
import { Web3ContextActions, Web3ContextState } from "./types";
import { initActions, initState } from "./constants";

export const Web3StateContext = createContext<Web3ContextState>(initState);
export const Web3ActionsContext =
  createContext<Web3ContextActions>(initActions);
