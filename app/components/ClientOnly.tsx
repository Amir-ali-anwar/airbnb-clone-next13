'use client';
import React, { useState } from 'react'

type ClientOnlyProps = {
    children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hasMounted, SethasMounted] = useState(false);
    React.useEffect(() => {
        console.log('mounted');
        
        SethasMounted(true);
    }, [])
    if(!hasMounted) return null
    return (
        <div>{children}</div>
    )
}

export default ClientOnly