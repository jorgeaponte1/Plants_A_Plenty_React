"use client"

import { useEffect } from "react"
import { signOut, useSession } from "next-auth/react"

function LoginButton() {
  // const { data: session, update } = useSession()
  const session = useSession()
  const sessionData = session?.data
  const update = session?.update

  useEffect(() => {
    const interval = setInterval(() => update(), 1000 * 60 * 60)
    return () => clearInterval(interval)
  }, [update])

  return (
    <>
      <ul className="flex">
        {sessionData ? (
          <li>
            <button
              onClick={() => signOut()}
              className="bg-[rgb(240,215,176)] text-black no-underline uppercase px-[2.5em] py-[1em] rounded-xl hover:bg-[rgb(135,161,93)] text-sm font-serif font-semibold"
            >
              LOGOUT
            </button>
          </li>
        ) : (
          <li>
            <a
              href="/login"
              className="bg-[rgb(240,215,176)] text-black no-underline uppercase mt-5 px-[1.5em] py-[1em] rounded-xl hover:bg-[rgb(135,161,93)] text-sm font-serif font-semibold"
            >
              LOGIN/SIGNUP
            </a>
          </li>
        )}
      </ul>
    </>
  )
}

export default LoginButton
