"use client";

import { Fragment } from "react";
import useFetch from "../hooks/useFetch";

const DataComponent = ({dataurl})=>{
    const { loading, error, data } = useFetch({
        url: dataurl
    });
    if (error) return <div>Failed to load</div>;
    if (loading) return <div>Loading...</div>;
    if (!data) return null;    
    return (
        <>
            {
                // loading ? "...loading" :<>{
                    Array.isArray(data) ? 
                    (data || []).map((todo:any, index:number)=>{
                        return <Fragment key={index}>
                                {todo.title}<br/>
                            </Fragment>
                    })
                    :
                        <b>{data.message}</b>
                // }
                // </>
            }
        </>
    )
}
export default DataComponent;