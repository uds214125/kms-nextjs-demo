"use client";
import React, { useEffect, useState } from 'react';

// interface Data{
//     id?: number,
//     data?: string
// }
// interface IAppProps {
//     url: string
// }
// interface Dictionary {
//     [key: string]: Data
// }
interface Data{
    status?: number,
    message?: string,
    data?: any
}
const useFetch = ({url}) => {
    const [error, setError] = useState<object | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Data>();
    
      useEffect(()=>{
        const getData = async ()=>{
            try {
                setLoading(true);
                const res = await fetch(url);
                setData(await res.json());
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }
        getData();
      },[url]);
  return {
    error, 
    data,
    loading
  };
};

export default useFetch;
