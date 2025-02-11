import { initState } from "./constants";
import { Web3ContextState, Action, ActionType } from "./types";

const web3ContextReducer = (state: Web3ContextState, action: Action) => {
  switch (action.type) {
    case ActionType.CONNECTED:
      return {
        ...state,
        address: action.payload.address,
        chainId: action.payload.chainId,
        signer: action.payload.signer,
        web3Provider: action.payload.web3Provider,
      };
    case ActionType.DISCONNECTED:
      return {
        ...initState,
      };
    default:
      return state;
  }
};

export default web3ContextReducer;
