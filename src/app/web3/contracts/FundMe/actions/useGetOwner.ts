"use client";
import { useEffect, useState } from "react";
import useFundMeContract from "../useFundMeContract";

const useGetOwner = () => {
  const contract = useFundMeContract();

  const [owner, setOwner] = useState(null);

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
