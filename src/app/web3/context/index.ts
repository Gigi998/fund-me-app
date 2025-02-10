"use client";
import { useContext } from "react";
import { Web3ActionsContext, Web3StateContext } from "./context";

export const useWeb3State = () => useContext(Web3StateContext);
export const useWeb3Actions = () => useContext(Web3ActionsContext);
