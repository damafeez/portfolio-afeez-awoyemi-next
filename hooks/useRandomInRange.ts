import { useEffect, useState } from 'react'
import { randomInRange } from '../utils'

// because next js errors with "content mismatch" when random entities are rendered on server vs client
// this hook provides randomization that's only called on client, since useEffect is only called after hydration
export default function useRandomInRange(min: number, max: number): number {
  const [val, setVal] = useState(min)

  useEffect(() => {
    setVal(randomInRange(min, max))
  }, [min, max])
  return val
}
