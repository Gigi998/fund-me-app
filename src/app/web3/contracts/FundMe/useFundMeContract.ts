import { Contract } from "ethers";
import { useMemo } from "react";
import { useWeb3State } from "../../context";
import IFundMe from "./IFundMe.json";
import { config } from "@/app/shared/config/index";

const useFundMeContract = () => {
  const { signer } = useWeb3State();

  const contract = useMemo(() => {
    if (!signer) return null;

    return new Contract(config.contracts.fundMeAddress, IFundMe, signer);
  }, [signer]);

  return contract;
};

export default useFundMeContract;
