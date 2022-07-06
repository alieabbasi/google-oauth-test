import type { NextPage } from 'next'
import { useSession, signOut, signIn } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {data: session} = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        Signed in
        <button onClick={() => signOut()}>Sign Out</button>
        <div>User Data</div>
        <div>Name: {session.user?.name} </div>
        <div>Email: {session.user?.email} </div>
        <div>Avatar: 
          <Image src={session.user?.image!} width={100} height={100}/>
        </div>
        <div>Expires:  {JSON.stringify(session.expires)}</div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div>Signed out</div>
        <br />
        <Link href={"/login"} className={styles.loginButton}>Sign In</Link>
      </div>
    )
  }
}

export default Home
