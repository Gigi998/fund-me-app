import { Web3ContextState } from "./types";

const initState: Web3ContextState = {
  web3Provider: null,
  address: null,
  chainId: null,
  signer: null,
};

const initActions = {
  connect: async () => undefined,
  disconnect: () => {},
};

export { initActions, initState };
