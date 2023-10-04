import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Success</CardTitle>
        <CardDescription>{JSON.stringify(searchParams)}</CardDescription>
      </CardHeader>
    </Card>
  )
}
