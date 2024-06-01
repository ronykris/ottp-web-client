import { OttpClient } from '@ottp/sdk';
import React, { ReactHTMLElement } from 'react';
import { useAuth } from '../context/AuthContext';

interface AddButtonProps {
    collaborators: string;
    contributions: string;
    project: string;
}

const ottp = new OttpClient()

const AddButton: React.FC<AddButtonProps> = ({ collaborators, contributions, project }) => {

    const { walletAddr, fid} = useAuth()
    
    
    const handleAdd = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        try {
            console.log(fid)
            console.log(collaborators, contributions, project)
            const collabs = await ottp.getTaggedUserFids(collaborators)
            console.log(collabs)
          const data = {
            "toFID": collabs,
            "message":contributions,
            "project":[project]
          }
          console.log(data)
          const tx = await ottp.createOttpAttestation(walletAddr, fid!, JSON.stringify(data));      
          console.log('Attestation created successfully')
          console.log('Transaction: ', tx)
        } catch (error) {
          console.error('Error creating attestation:', error);
        }
      }
    
  return (
    <div className="flex items-center justify-between w-full space-x-4">
      <p className="flex-1">By attesting, you are confirming onchain.</p>
      <button 
        type="button" 
        className="bg-black text-white px-4 py-2 flex items-center justify-center space-x-2"
        onClick={handleAdd}
      >
        <i className="fas fa-plus"></i>
        <span>Add</span>
      </button>
    </div>
  );
};

export default AddButton;
