export type FileType = {
  assetId: string | null;
  fileName: string | null;
  fileSize: number;
  height: number;
  type: 'image' | 'video' | 'success';
  uri: string;
  width: number;
  cancelled: boolean;
  name: string | null;
  size: number;
  mimeType: string;
};

export type PostDataType = {
  title: string;
  contents: string;
  dataType: 'file' | 'images';
  data: string[] | FileType;
  interest: string[];
  clap: string[];
  user: UserDataType;
};

export type UserDataType = {
  name: string;
  img: string;
};

export type ChatDataType = {
  user: UserDataType;
  type: 'text' | 'file' | 'images';
  contents: string | string[] | FileType[];
  createdAt: string;
};
