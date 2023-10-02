"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loading...</CardTitle>
      </CardHeader>
      <CardContent>
        <Loader2 className="animate-spin" size={32} />
        <Timer />
      </CardContent>
    </Card>
  )
}

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  )
}
