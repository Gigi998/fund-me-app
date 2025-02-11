"use client";
import PageWrapper from "./(components)/Wrapper/PageWrapper/PageWrapper";
import useGetOwner from "./web3/contracts/FundMe/actions/useGetOwner";
import FundForm from "./(components)/Application/Fund/FundForm/FundForm";
import { useWeb3State } from "./web3/context";
import useWithdraw from "./web3/contracts/FundMe/actions/useWithdraw";
import Button from "./(components)/Basic/Button/Button";
import { useGetBalance } from "./web3/contracts/FundMe/actions/useGetBalance";

export default function Home() {
  const owner = useGetOwner();

  const balance = useGetBalance();

  const { signer } = useWeb3State();

  const withdraw = useWithdraw();

  return (
    <PageWrapper className='items-center justify-start gap-y-10'>
      <span className='text-4xl'>This is Fund-me contract</span>
      {owner ? <span className='text-3xl'>Contract owner: {owner}</span> : null}
      {signer ? <FundForm /> : null}
      {signer ? (
        <Button onClick={async () => await withdraw()}>Withdraw</Button>
      ) : null}
      {<span className='text-3xl'>Balance: {balance} ETH</span>}
    </PageWrapper>
  );
}
