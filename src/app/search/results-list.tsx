"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ResultsList({ files }: { files: FileObject[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {files.map((file) => (
        <Card key={file.fileId}>
          <CardHeader>
            <CardTitle className="flex justify-between">
              {file.customMetadata?.displayName ?? file.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <IKImage
              path={file.filePath}
              key={file.fileId}
              alt={file.name}
              width={300}
              height={400}
            />
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/customize/${file.fileId}`}>Customize</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
