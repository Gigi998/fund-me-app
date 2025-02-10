"use client";
import { PropsWithChildren, useReducer } from "react";
import { Web3ActionsContext, Web3StateContext } from "./context";
import web3ContextReducer from "./reducer";
import { initState } from "./constants";
import { ActionType } from "./types";
import { BrowserProvider } from "ethers";
import { connectToProvider } from "../connectors";

const Web3ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(web3ContextReducer, initState);

  const connect = async () => {
    const provider = await connectToProvider();

    if (!provider) return undefined;

    const web3 = new BrowserProvider(provider, "any");

    const signer = await web3.getSigner();
    const address = (await signer.getAddress()).toLowerCase();
    const network = await web3.getNetwork();
    const chainId = network.chainId.toString();

    dispatch({
      type: ActionType.CONNECTED,
      payload: {
        address,
        signer,
        chainId,
      },
    });
    return undefined;
  };

  const disconnect = () => {
    dispatch({
      type: ActionType.DISCONNECTED,
    });
  };

  const actions = {
    connect,
    disconnect,
  };

  return (
    <Web3StateContext.Provider value={state}>
      <Web3ActionsContext.Provider value={actions}>
        {children}
      </Web3ActionsContext.Provider>
    </Web3StateContext.Provider>
  );
};

export default Web3ContextProvider;
