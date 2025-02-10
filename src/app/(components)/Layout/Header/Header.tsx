"use client";
import Button from "../../Basic/Button/Button";
import { useWeb3Actions, useWeb3State } from "@/app/web3/context";

const Header = () => {
  const { connect, disconnect } = useWeb3Actions();
  const { signer, address } = useWeb3State();

  const connectHandler = async () => {
    if (signer) {
      return disconnect();
    } else {
      return await connect();
    }
  };

  return (
    <header className='mt-10 flex items-end'>
      <div className='ml-auto flex flex-col items-end gap-y-2'>
        <Button onClick={async () => await connectHandler()} className='w-40'>
          {signer ? "Disconnect" : "Connect"}
        </Button>
        {address ? <span className='text-lg'>{address}</span> : null}
      </div>
    </header>
  );
};

export default Header;
