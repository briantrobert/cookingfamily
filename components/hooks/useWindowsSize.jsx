import {useState, useEffect} from 'react'

function useWindowSize() {
    // let size = []

    // if(typeof window !== "undefined"){
    //     size = [window.innerHeight, window.innerWidth]
        
    // }

    const [sizeWindow, setSizeWindow] = useState([]);
    
    useEffect(() => {
        const handleResizeWindow = () => {
          setSizeWindow([window.innerHeight,window.innerWidth]);
      };
    
      window.addEventListener("resize", handleResizeWindow);
      return () => {
          window.removeEventListener("resize", handleResizeWindow);
      }
    }, []);
    

  return sizeWindow;
}

export default useWindowSize