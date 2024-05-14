# kms-nextjs-demo
kinder-activity-management-system
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

General Route
    http://localhost:3000/pedagogy
    http://localhost:3000/settings/profile

Dyanamic Route
    http://localhost:3000/educators/1

Hidden Folder Route / Route Groups:
    How to create : 
        root folder / (hidden-folder) / other-folder
        e.g., http://localhost:3000/settings/(system)/theme

    http://localhost:3000/settings/theme

Catch All Route: 
    after curriculum all and anything in the param will be catched
    e.g., curriculum: /Languages or /Humanities or /Mathematics 
        or /problem-solving or /critical-thinking etc.
    How to create : 
        root folder / [...new-folder]

    http://localhost:3000/curriculum/languages
    http://localhost:3000/curriculum/humanities
    http://localhost:3000/curriculum/problem-solving
    http://localhost:3000/curriculum/problem-solving/2024/1
    http://localhost:3000/curriculum/languages/1/2024
    http://localhost:3000/curriculum/test/1/2024
    http://localhost:3000/curriculum/languages/1/2024/dadjsljdfs

Optional Route:    
    sometimes when you do not want to show but can be access using that route

    e.g., 
        baseUrl/dashboard or baseUrl/ 
        'dashboard' is optional 

    How to make ?
        [[folder-name]]

Parallel/Conditional Route:  
    How to create ?
        rootFolder / @newfolder1
        rootFolder / @newfolder2

Layout : 
    structure of your role specific layout 
    header, footer, sidebar, container
    
    Note: either you can use parellel-route or layout 

Link:

Programatically Route :
    import { useRouter } from 'next/naviation';
    const router = useRouter();
    router.push("/path);

Components :
    Server Component : by default all components are server component 
    Client Component : 
        you have to mention "use client" in the component in order to make client component.
        where to use ?
            for all hooks and client  useEffect, useState etc. 

# Without page.tsx all folder/route will becomes private and will not be disclose

# Private folder :
    underscore(_)folderName : _lib\

# Routing Metadata

# Title metadata