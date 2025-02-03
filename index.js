import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the main app page
    router.push('/app')
  }, [])

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  )
}
