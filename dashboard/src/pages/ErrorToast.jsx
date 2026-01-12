import React, { useContext, useEffect } from 'react'
import { GeneralContext } from './GeneralContext'

const ErrorToast = () => {
  const { error, seterror } = useContext(GeneralContext);

  if (!error) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-red-50 text-red-700 w-full max-w-sm mx-4 
                      px-5 py-4 rounded shadow-lg">

        <div className="flex justify-between items-start">
          <h2 className="font-medium">{error}</h2>

          <button
            onClick={() => seterror(null)}
            className="ml-4 font-bold text-lg leading-none"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
};



export default ErrorToast