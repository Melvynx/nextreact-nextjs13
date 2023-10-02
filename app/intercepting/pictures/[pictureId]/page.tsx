/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { BackButton } from "@/components/utils/BackButton"

import { PICTURES } from "../../pictures.data"

export default function Page({
  params,
}: {
  params: {
    pictureId: string
  }
}) {
  const picture = PICTURES[Number(params.pictureId) - 1]
  return (
    <Card>
      <CardHeader>
        <BackButton />
        <CardTitle>/parallel/pictures/[pictureId]</CardTitle>
        <CardDescription>Base parallel page</CardDescription>
      </CardHeader>
      <CardContent>
        {picture ? (
          <img src={picture} alt="some photo" />
        ) : (
          <Typography>No photo</Typography>
        )}
      </CardContent>
    </Card>
  )
}
