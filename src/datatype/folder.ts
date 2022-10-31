export interface FolderType {
  id: string;
  title: string;
  icon?: string;
  createTime?: string;
  currentFolderStyle?: string;
  isHidden?: boolean;
  folderList?: FolderType[];
}

export interface FolderHiddenType {
  ids: string[];
  hiddenStatus: boolean;
}
