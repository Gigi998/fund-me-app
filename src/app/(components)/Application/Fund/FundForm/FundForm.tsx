"use client";

import React, { useEffect, useState } from "react";
import useFund from "@/app/web3/contracts/FundMe/actions/useFund";
import Button from "@/app/(components)/Basic/Button/Button";

const FundForm = () => {
  const [amount, setAmount] = useState("");

  const [isClient, setIsClient] = useState(false);

  const fund = useFund();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add loading component
  if (!isClient) return <span>loading</span>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fund(amount);

    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center gap-y-4'
    >
      <label htmlFor='amount'>Fund amount</label>
      <input
        id='amount'
        className='w-full text-primary outline-none caret-green h-[40px] rounded-[20px] border-2 px-4 text-base font-light mt-[10px] mb-2 bg-transparent placeholder:text-secondary'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type='text'
      />
      <Button>Fund</Button>
    </form>
  );
};

export default FundForm;
