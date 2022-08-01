import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>This is the A Page</h1>
      <div>
        <div style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={() => router.push('/b')}>
          Click here and go to the B page
        </div>
      </div>
    </div>
  )
}
