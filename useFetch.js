import React, { useCallback, useEffect, useState } from 'react'

const localCahe={};

const useFetch = (url) => {

  const[state, setGet]=useState({
    data:null,
    isLoading:true,
    hasError:false,
    error:null
  })
const setLoadingState=()=>{
  setGet({
    data:null,
    isLoading:true,
    hasError:false,
    error:null,
  })
}
  const getData=async()=>{
    
    if(localCahe[url]){
      setGet({
        data:localCahe[url],
        isLoading:false,
        hasError:false,
        error:null,
      });

      return;
    }

      setLoadingState();
  
      const response=await fetch(url)

        await new Promise(resolve=>setTimeout(resolve,1500));

        if(!response.ok){
          setGet({
            data:null,
            isLoading:false,
            hasError:true,
            error:{
              code:response.status,
              message:response.statusText,
            }
          });
          return;
        }
        const data=await response.json();
        
        setGet({
          data,
          isLoading:false,
          hasError:false,
          error:null,
        })
        localCahe[url]=data
  }
  
  useEffect(()=>{
    getData()
  },[url])
  
  console.log(localCahe[url])
    return {
        data: state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,
    }
}

export default useFetch
