import React from 'react';

const AddButton: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full space-x-4">
      <p className="flex-1">By attesting, you are confirming onchain.</p>
      <button 
        type="button" 
        className="bg-black text-white px-4 py-2 flex items-center justify-center space-x-2"
      >
        <i className="fas fa-plus"></i>
        <span>Add</span>
      </button>
    </div>
  );
};

export default AddButton;
