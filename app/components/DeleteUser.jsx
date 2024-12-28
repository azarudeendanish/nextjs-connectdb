'use client'

import { useRouter } from "next/navigation";

export default function DeleteUser ({id}) {
    console.log('delete user id=> ',id);
    
    const router = useRouter()
    const handleDelete = async () => {
        const yes = confirm('really want to delete?')
        if (yes) {
          const res = await fetch(`http://localhost:3000/api/users?id=${id}`, {
            method: 'DELETE',
          })
          if (res.ok) {
            router.refresh();
          }
        }
      }
    return (
        <button onClick={handleDelete} type="button" className="focus:outline-none text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
    )
}