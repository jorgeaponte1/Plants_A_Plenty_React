"use client"

import React, { useState } from "react"
// import { useSession } from "next-auth/client"

function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(true)
  //   const session = useSession()

  return (
    <div className="pl-2">
      <ul className="hidden lg:flex">
        {loggedIn ? (
          <li>
            <a
              href="/logout/"
              className="bg-[rgb(240,215,176)] text-black no-underline uppercase mt-5 px-[2.5em] py-[1em] rounded-xl hover:bg-[rgb(135,161,93)] text-sm font-serif font-semibold"
            >
              LOGOUT
            </a>
          </li>
        ) : (
          <li>
            <a
              href="/login/"
              className="bg-[rgb(240,215,176)] text-black no-underline uppercase mt-5 px-[1.5em] py-[1em] rounded-xl hover:bg-[rgb(135,161,93)] text-sm font-serif font-semibold"
            >
              LOGIN/SIGNUP
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default LoginButton
