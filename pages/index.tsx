import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic<{ url: string }>(import("swagger-ui-react") as any, {
  ssr: false,
});

export default function Index() {
  return (
    <div>
      <Head>
        <title>Next Swagger Doc Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwaggerUI url="/api/doc" />
    </div>
  );
}