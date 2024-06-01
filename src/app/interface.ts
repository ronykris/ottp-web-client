import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface AuthContextType {
  walletAddr: string;
  setWalletAddr: React.Dispatch<React.SetStateAction<string>>;
  fid: number | null;
  setFid: React.Dispatch<React.SetStateAction<number>>;
  signin: () => Promise<void>
}

export type { Props, AuthContextType}