import { useWeb3State } from "@/app/web3/context";
import { config } from "@/app/shared/config/index";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export const useGetBalance = () => {
  const { web3Provider } = useWeb3State();

  const [balance, setBalance] = useState("");

  const getBalance = async () => {
    if (!web3Provider) return;

    const balance = await web3Provider?.getBalance(
      config.contracts.fundMeAddress
    );

    setBalance(ethers.formatEther(balance));
  };

  useEffect(() => {
    getBalance();
  }, [web3Provider]);

  return balance;
};
