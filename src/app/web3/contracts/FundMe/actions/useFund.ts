import { Contract, ethers } from "ethers";
import { useWeb3State } from "../../../context";
import { config } from "@/app/shared/config/index";
import { useMemo } from "react";
import IFundMe from "../IFundMe.json";

const useFund = () => {
  const { signer } = useWeb3State();

  const contract = useMemo(() => {
    if (!signer) return null;

    return new Contract(config.contracts.fundMeAddress, IFundMe, signer);
  }, [signer]);

  return async (amount: string) => {
    try {
      const tx = await contract?.fund({ value: ethers.parseEther(amount) });

      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
};

export default useFund;
