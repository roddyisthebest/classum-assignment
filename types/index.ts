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
  files: FileType[] | any[];
  interest: string[];
  clap: string[];
};
