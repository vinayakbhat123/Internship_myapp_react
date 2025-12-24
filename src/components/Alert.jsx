import React from "react";


function Alert({ title, Email, onClose }) {
  return (
    <div className="fixed inset-0 z-50">
      
      <div className="absolute inset-0 bg-black/20"></div>

      
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
   
        <div className="px-6 pt-6">
          <h1 className="text-xl font-bold mb-3">LocalHost:5151 says</h1>
        </div>

        <div className="px-6 pb-2">
          
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              Email: <span className="font-medium">{Email}</span>
            </p>
          </div>
        </div>

       
        <div className="flex justify-end px-6 pb-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-2xl border border-white hover:bg-blue-700 transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
