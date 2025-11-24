/**
 * Collections Page - Redirects to Homepage
 * The homepage is now the collections page
 * @page app/collections
 */

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CollectionsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to homepage (which is the collections page)
    router.replace('/')
  }, [router])

  return null
}
