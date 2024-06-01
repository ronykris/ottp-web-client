'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import axios from 'axios'
import { createWalletClient, custom } from 'viem'
import { base } from 'viem/chains'
import { AuthContextType, Props } from '../interface';

const defaultAuthContext: AuthContextType = {
  walletAddr: '',
  setWalletAddr: () => {},
  fid: 0,
  setFid: () => {},
  signin: async () => {}
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [walletAddr, setWalletAddr] = useState('');
  const [fid, setFid] = useState<number>(0);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const client = createWalletClient({
          chain: base,
          transport: custom(window.ethereum!)
        })
        const accounts = await client.getAddresses()
        console.log(accounts)
        if (!accounts) {
          setWalletAddr('')
          setFid(0)
        }
      } catch (error) {
          console.error('Error checking connection ', error);
      }
    }
    checkConnection();
  }, []);

  const getFid = async (addr: string) => {    
    try {      
      const response = await axios.get(`/api/signin?addr=${addr}`)
      const data = response.data
      const fid = data[0][addr.toLowerCase()][0].fid
      console.log(fid)
      return fid
    } catch (err) {
      console.error(err)
      return 0
    }
  }

  const signin = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to connect.");
      return;    
    }
    if (window.ethereum && window.ethereum.request) {
      try {
        const accounts: string[] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const address: string = accounts[0]
        setWalletAddr(address as `0x${string}`)
        console.log(address)
        const fid = await getFid(address)
        console.log(fid)        
        if (fid !== 0) {
          setFid(fid)
        }
      } catch (error) {
        console.error('Error connecting: ', error);
      }
    }
  }

  return (
    <AuthContext.Provider value={{ walletAddr, setWalletAddr, fid, setFid, signin }}>
      {children}
    </AuthContext.Provider>
  )
};
