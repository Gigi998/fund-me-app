import { Config } from "./types";

export const config: Config = {
  contracts: {
    fundMeAddress: process.env.NEXT_PUBLIC_FUND_ME!,
  },
};
