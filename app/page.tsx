import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">DataRoc</h1>
      <Button>
        <Link href={`dashboard`}>Get Started</Link>
      </Button>
      {/* <Link href={`dashboard/${userId}`}>Get Started</Link> */}
    </div>
  );
};

export default page;
