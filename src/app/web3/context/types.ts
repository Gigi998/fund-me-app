import { BrowserProvider } from "ethers";
import { JsonRpcSigner } from "ethers";

export interface Web3ContextState {
  web3Provider?: BrowserProvider | null;
  chainId?: number | null;
  signer?: JsonRpcSigner | null;
  address?: string | null;
}

export interface Web3ContextActions {
  connect: () => Promise<
    { currentAddress: string; signer: JsonRpcSigner } | undefined
  >;
  disconnect: () => void;
}

export enum ActionType {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

export interface Action {
  type: ActionType;
  payload?: any;
}
