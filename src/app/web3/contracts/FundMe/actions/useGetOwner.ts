"use client";
import { Contract } from "ethers";
import { useMemo, useEffect, useState } from "react";
import { useWeb3State } from "../../../context";
import IFundMe from "../IFundMe.json";
import { config } from "@/app/shared/config/index";

const useGetOwner = () => {
  const { signer } = useWeb3State();

  const [owner, setOwner] = useState(null);

  const contract = useMemo(() => {
    if (!signer) return null;

    return new Contract(config.contracts.fundMeAddress, IFundMe, signer);
  }, [signer]);

  useEffect(() => {
    if (!contract) return;

    const fetchOwner = async () => {
      try {
        const owner = await contract?.getOwner();
        setOwner(owner);
      } catch (error) {
        console.error("Error fetching owner:", error);
      }
    };

    fetchOwner();
  }, [contract]);

  return owner;
};

export default useGetOwner;
