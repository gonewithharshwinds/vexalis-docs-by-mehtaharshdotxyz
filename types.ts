export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface DocumentMetadata {
  id: string;
  title: string;
  lastModified: Date;
  owner: User;
  status: 'saved' | 'saving' | 'unsaved';
}

export enum EditorTool {
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  UNDERLINE = 'UNDERLINE',
  ALIGN_LEFT = 'ALIGN_LEFT',
  ALIGN_CENTER = 'ALIGN_CENTER',
  ALIGN_RIGHT = 'ALIGN_RIGHT',
  LIST_BULLET = 'LIST_BULLET',
  LIST_NUMBER = 'LIST_NUMBER',
}

export type Theme = 'light' | 'dark';