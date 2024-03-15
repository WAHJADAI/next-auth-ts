import React from 'react'
import { auth, signOut } from '../auth'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function SingOut() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}

export default async function Header({}: Props) {
  const session = await auth()
  console.log(session)
  return (
    <div>
      <div>
        {session?.user ? (
          <div>
            <div>
              {/* {session.user.name && session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={32}
                  height={32}
                />
              )} */}
            </div>

            <SingOut />
          </div>
        ) : (
          <Link href="/api/auth/signin">Sing In</Link>
        )}
      </div>
    </div>
  )
}
