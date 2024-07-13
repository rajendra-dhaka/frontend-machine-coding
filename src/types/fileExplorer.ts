export type FileExplorerItemType = {
  name: string;
  type: string;
  children?: Array<FileExplorerItemType>;
};
