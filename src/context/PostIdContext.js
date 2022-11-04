import React, { createContext,useState } from 'react'

export const PostIdContext=createContext()
export default function PostIdContextProvider(props) {
    const [postId,setPostId]=useState(null)
  return (
    
    <PostIdContext.Provider value={{postId,setPostId}}>
        {props.children}
    </PostIdContext.Provider>

  )
}
