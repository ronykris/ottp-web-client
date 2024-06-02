'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Signin from '../components/Signin';
import Add from '../components/Add';
import { OttpClient } from '@ottp/sdk'

const Attest: React.FC = () => {
  const { walletAddr, fid } = useAuth()
  const [collaborators, setCollaborators] = useState("");
  const [contributions, setContributions] = useState("");
  const [project, setProject] = useState("");

  const resetFields = () => {
    setCollaborators("");
    setContributions("");
    setProject("");
  };

  
  return (
    <div className="flex flex-col items-start justify-center px-4 py-8">
    <h1 className="text-5xl font-bold mb-4">Put your work onchain.</h1>

    <div className="w-full max-w-lg">        
    <div className="mb-4">
        <label className="block text-black mb-2">
          Collaborators*
          <span className="text-gray-600 text-sm block">Tag all collaborators, using their <a href="#" className="text-blue-600">Farcaster</a> usernames, e.g. @username @username @username</span>
        </label>
        <input 
          className="w-full border-2 border-black p-2" 
          type="text" 
          placeholder="@lowcodekrish @naaate @decipher @ting" 
          readOnly={ fid === 0 } 
          value={collaborators}
          onChange={(e) => setCollaborators(e.target.value)}
          />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">
          Contributions*
          <span className="text-gray-600 text-sm block">Describe what you worked on together.</span>
        </label>
        <textarea 
          className="w-full border-2 border-black p-2 h-32" 
          value={contributions}
          placeholder="Worked on OTTP and completed Backdrop Build V4." 
          readOnly={ fid === 0 }
          onChange={(e) => setContributions(e.target.value)}
          />
      </div>

      <div className="mb-4">
        <label className="block text-black mb-2">
          Project
          <span className="text-gray-600 text-sm block">Tag project, if applicable, using Farcaster username.</span>
        </label>
        <input 
          className="w-full border-2 border-black p-2" 
          type="text"
          value={project} 
          placeholder="@ottp" 
          readOnly={ fid === 0 }
          onChange={(e) => setProject(e.target.value)}
          />
      </div>
      <div className="flex justify-end space-y-4">
      {fid === 0 ? <Signin /> : <Add collaborators={collaborators} contributions={contributions} project={project} onResetFields={resetFields}/>}
      </div>
            
    </div>
    </div>
  );
};

export default Attest;
