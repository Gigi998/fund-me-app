import useFundMeContract from "../useFundMeContract";

const useWithdraw = () => {
  const contract = useFundMeContract();

  return async () => {
    try {
      const tx = await contract?.withdraw();

      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
};

export default useWithdraw;
