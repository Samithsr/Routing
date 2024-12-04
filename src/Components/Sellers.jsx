import React,{useEffect, useState} from 'react'


const Sellers = () => {
  const [name, setname] = useState("")
  useEffect(() => {
    console.log("Compponent Mount!");

    //  use effect clean up function
    return () => {
      console.log("Component Unmount!");  
    }
    
      // display the tab name
    // const notification =5;
    // document.title = `Name: ${name}`;

  }, [name]);
  return ( 
       <><h2>Admin Sellers Page</h2>
       <input type="text" onChange={e => setname(e.target.value)} />
       </>
  )
}

export default Sellers