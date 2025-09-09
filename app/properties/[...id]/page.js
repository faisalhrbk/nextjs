"use client"
import { useRouter, useParams, useSearchParams } from "next/navigation"

const Page = () => {
  const router = useRouter();
  const params = useParams();
  return (
    
    <div>properties  id page
      <br />
      {JSON.stringify(params)}
      <br />
      <button onClick={() => router.push('/')}>Go to Home</button>
      <button onClick={() => router.back()}>Go Back</button>
 <button onClick={() => router.forward()}>Go Forward</button>
    </div>
  )
}

export default Page