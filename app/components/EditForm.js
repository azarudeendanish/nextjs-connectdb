'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditForm = ({ id, name, email }) => {
    const [nameNew, setNameNew] = useState(name)
    const [emailNew, setEmailNew] = useState(email)
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ nameNew, emailNew }),
            });
 
            if (!res.ok) {
                throw new Error("Failed to update Product");
            }
 
            router.refresh();
            router.push("/products");
        } catch (error) {
            console.log(error);
            
        }
    }
    return <>
        update page {id}
        <form onSubmit={handleSubmit}>

            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Name
            </label>
            <div className="mt-2">
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={nameNew}
                    autoComplete="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setNameNew(e.target.value)}
                />
            </div>
            <label htmlFor="emial" className="block text-sm/6 font-medium text-gray-900">
                Email
            </label>
            <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={emailNew}
                    autoComplete="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setNameNew(e.target.value)}
                />
            </div>
            <div className='mt-10'>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
            </div>
        </form>
    </>
}

export default EditForm