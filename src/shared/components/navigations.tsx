"use client";
import * as React from 'react';
import { useRouter } from 'next/navigation';


export interface IAppProps {
}

export function Navigations (props: IAppProps) {
const router = useRouter();
console.log({router});

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <button>Home</button>
        <button>Calendar</button>
        <button>Curriculum</button>
        <button>Messages</button>
        <button>Educators</button>
        <button onClick={()=> router.push("/settings/profile")}>Children</button>
        <button onClick={()=> router.push("/settings/profile")}><b>Settings</b></button>
        <button>ECD centres</button>
    </div>
  );
}
