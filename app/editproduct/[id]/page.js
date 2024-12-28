import EditForm from "@/app/components/EditForm";

const getUserById = async (id) => {
    console.log(id);
    
    try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error('Failed to fetch users')
        }
        console.log(res.json);
        
        return res.json()
    } catch (error) {
        console.log('get userbyId => ',error);

    }
}
export default async function Page({ params }) {
    let { id } = await params;
    const { users } = await getUserById(id)
    console.log(users);
    
    const { name, email } = users

    return <div className="container mx-auto px-4 bg-grey-100"><EditForm id={id} name={name} email={email} /></div>
}