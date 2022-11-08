import React from 'react'
import Link from 'next/link'

export default function index(props:any) {

  console.log(props);
  

  return (
    <div className='container px-4 pt-5'>
      <h1 className="text-center">La liste des utilisateurs</h1>
      <div className="row justify-content-center mt-5">
        {props.users.map((user:any) => (
          <div className="col-12 col-lg-6 m-2">
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">
                  {user.username}
                </h5>
                <Link 
                href={`utilisateurs/${user.id}`}
                className='ml-auto card-link'>
                    Contacter
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}