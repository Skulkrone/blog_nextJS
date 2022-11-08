import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="global-container nav justify-content-center fixed-top bg-primary mb-4" >
      <Link className="nav-link fs-5 text-light mx-4" href="/">
          Accueil
      </Link>
      <Link className="nav-link fs-5 text-light mx-4" href="/blog">
          Blog
      </Link>
      <Link className="nav-link fs-5 text-light mx-4" href="/utilisateurs">
          Liste
      </Link>
    </nav>
  )
}
