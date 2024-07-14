"use client";
import React from "react";
import FileExplorerData from "@/data/fileExplorerData.json";
import { FileExplorerItem } from "@/components";

const Page = () => {
  return (
    <div>
      {FileExplorerData.data.map((item, i) => (
        <FileExplorerItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Page;
