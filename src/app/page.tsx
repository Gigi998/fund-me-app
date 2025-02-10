"use client";
import PageWrapper from "./(components)/Wrapper/PageWrapper/PageWrapper";
import useGetOwner from "./web3/contracts/FundMe/actions/useGetOwner";
import FundForm from "./(components)/Application/Fund/FundForm/FundForm";

export default function Home() {
  const owner = useGetOwner();

  // Add contract balance

  return (
    <PageWrapper className='items-center justify-start gap-y-10'>
      <span className='text-4xl'>This is Fund-me contract</span>
      {owner ? <span className='text-3xl'>Contract owner: {owner}</span> : null}
      <FundForm />
    </PageWrapper>
  );
}
