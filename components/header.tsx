import React from 'react';


const Header = ({title}) => {
    return(
        <>
            <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">{title}</h2>
                <button className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                    
                    Connect to Wallet
                </button>
                </div>
                
            </header>
        </>
    )

}

export default Header