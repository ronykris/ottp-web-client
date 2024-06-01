import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SignInButton: React.FC = () => {
  const { walletAddr, fid, signin } = useAuth();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSignIn = async () => {
    setIsAuthenticating(true);
    await signin();
    setIsAuthenticating(false);
  };

  useEffect(() => {
    if (!walletAddr && fid === 0) {
      setIsAuthenticating(false);
      console.log(fid);
    }
  }, [walletAddr, fid]);
  
  return (
    <button 
      type="button" 
      className="bg-black text-white px-4 py-2 flex items-center justify-center space-x-2" 
      onClick={handleSignIn}
      disabled={isAuthenticating}
    >
      <i className="fas fa-plus"></i>
      {isAuthenticating ? <span>Signing In...</span> : <span>Sign In</span>}
    </button>
  );
};

export default SignInButton;
