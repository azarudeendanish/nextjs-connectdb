'use client'
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [price, setPrice] = useState('')
  // const [category, setCategory] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      // alert('all fields are required');
      setError('all fields are required')
      return;
    }
    try {
      console.log('success');
      const res = await fetch("http://localhost:3000/api/users",{
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({name, email}),
      })
      // const response = await axios.post('http://localhost:3000/api/users', { name, email })
      console.log(res);
      setName('')
      setEmail('')
      router.push('/products')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container mx-auto px-4 bg-grey-100">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className='text-red-500 text-center text-[30px] font-bold'>Add New Products</h1>
        <form onSubmit={handleSubmit}>
          <div>
            {error &&
              <div className='text-center text-[25px] font-bold text-orange-600 capitalize'>{error}</div>
            }
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                // required
                autoComplete="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="Email" className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                // required
                autoComplete="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* <div>
            <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                // required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="cat" className="block text-sm/6 font-medium text-gray-900">
              Category
            </label>
            <div className="mt-2">
              <input
                id="cat"
                name="cat"
                type="text"
                // required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div> */}



          <div className='mt-10'>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>


      </div>
    </div>
  )
}