import React, { createContext ,useState} from 'react'
export const ClientAuthContext=createContext()
export default function ClientAuthContextProvider(props) {
    const [clientAuth,setClientAuth]=useState(false)

  return (
    <>
    <ClientAuthContext.Provider value={{clientAuth,setClientAuth}}>
        {props.children}
    </ClientAuthContext.Provider>
    </>
  )
}
