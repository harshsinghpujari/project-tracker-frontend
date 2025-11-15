import React from "react";

const AuthLayout = ({children}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[70%] h-[75%] shadow-2xl rounded-2xl flex bg-white ">
        <div className="w-1/2 h-full flex items-center justify-center p-10">
          {children}
        </div>
        <div className="w-1/2 h-full bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
            Here comes a template
        </div>
      </div>
    </div>
  )
}

export default AuthLayout 