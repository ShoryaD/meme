"use client";

import { IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";
import { urlEndpoint } from "./providers";

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      {name && (
        <IKImage
          width={300}
          height={500}
          urlEndpoint={urlEndpoint}
          path={name}
          alt="Meme Image"
          transformation={[
            {
              raw: "l-text,i-hello world,fs-50,l-end",
            },
          ]}
        />
      )}

      <IKUpload
        onSuccess={(res) => {
          setName(res.name);
        }}
        onError={(err) => console.error("Upload Error", err)}
      />
    </div>
  );
}
