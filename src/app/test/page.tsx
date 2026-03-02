"use client"

import { useState, useEffect } from 'react'

export default function Page() {
    const [text, setText] = useState('')

    async function getData() {
        const res = await fetch("/node/").then(res => res.json())
        setText(res.text)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className='min-h-screen flex justify-center flex-col items-center'>
            <h1>Pagina de prueba para testear el backend</h1>
            <div className='text-2xl'>{text}</div>
        </section>
    )
}
