import React, {useEffect,useState} from "react";
import axios from "axios";

export function useLazyFetch(url,pageNumber){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const [hasMore,setHasMore]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        axios({
            method:'GET',
            url: url,
            params:{page:pageNumber}
        }).then((response)=>{
            setData(prevData =>{
                return [...new Set([...prevData,...response.data])]
            })
            setHasMore(response.data.length > 0)
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    },[url,pageNumber]);

    return {data,loading,error,hasMore}
}