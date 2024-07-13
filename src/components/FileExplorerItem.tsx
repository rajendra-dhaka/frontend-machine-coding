"use client";

import { FileExplorerItemType } from "@/types/fileExplorer";
import { useState } from "react";
import { FaRegFolder, FaFile, FaRegFolderOpen } from "react-icons/fa";
import { MdKeyboardArrowDown, MdNavigateNext } from "react-icons/md";

const FileExplorerItem = ({
  item,
}: {
  item: FileExplorerItemType;
}): JSX.Element => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const toggleFolder = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  return (
    <div className="pl-4 border-l-2 border-neutral-600">
      <div className="flex items-center gap-2">
        {item.type === "folder" ? (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleFolder}
          >
            {isFolderOpen ? (
              <>
                <MdKeyboardArrowDown size={20} />
                <FaRegFolderOpen />
              </>
            ) : (
              <>
                <MdNavigateNext size={20} />
                <FaRegFolder />
              </>
            )}
          </div>
        ) : (
          <FaFile />
        )}
        {item.name}
      </div>
      {isFolderOpen && item.children && item.children.length > 0 && (
        <div>
          {item.children.map((child, i) => (
            <FileExplorerItem key={i} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorerItem;
