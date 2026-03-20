"use client"

import { useState, useEffect } from 'react'

export default function Page() {
    const [text, setText] = useState('probando')

    async function getData() {
        try {
            fetch("/node/api/saludo")
                .then(res => res.json())
                .then(data => {
                    setText(data)
                    console.log(data)
                });

        } catch (error) {
            console.error("Error fetching data:", error)
            setText("Error fetching data")
        }
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
