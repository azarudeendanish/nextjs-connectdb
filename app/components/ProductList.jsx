// 'use client'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  PlusCircleIcon
} from '@heroicons/react/20/solid';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import DeleteUser from './DeleteUser';

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error("Failed to get users");
    }
    return res.json()
  } catch (error) {
    console.log(error);
  }
}
export default async function ProductList() {
  let { users } = await getUsers();
  users = users.slice().reverse()
  console.log('user details => ', users);

  

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mt-10">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Product Page
          </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">


          <Link href='/addproducts'>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusCircleIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
              Add New Product
            </button>
          </Link>


        </div>

      </div>





      <Table>
        <TableHeader>
          <TableRow key='azaza'>
            {/* <TableHead className="w-[100px]">Name</TableHead> */}
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            {/* <TableHead>Method</TableHead> */}
            <TableHead className="text-center w-[100px]">Edit</TableHead>
            <TableHead className="text-center w-[100px]">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className='font-medium'>{user.email}</TableCell>
              <TableCell className="w-[100px]">
                <button type="button" className="focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
              </TableCell>
              <TableCell className="w-[100px]">
                <DeleteUser id={user._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>



    </>
  )
}
