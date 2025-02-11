import { ethers } from "ethers";
import useFundMeContract from "../useFundMeContract";

const useFund = () => {
  const contract = useFundMeContract();

  return async (amount: string) => {
    try {
      const tx = await contract?.fund({ value: ethers.parseEther(amount) });

      await tx.wait();

      console.log("funded");
    } catch (error) {
      console.log(error);
    }
  };
};

export default useFund;
