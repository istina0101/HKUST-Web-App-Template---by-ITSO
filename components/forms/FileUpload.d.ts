import * as React from 'react';
/**
 * Intentional addition: drag-and-drop zone with file rows (progress, error).
 */
export interface FileUploadProps {
  files?: Array<{ id?: string | number; name: string; size?: number; progress?: number; error?: React.ReactNode }>;
  onFiles?: (files: File[]) => void;
  onRemove?: (file: any) => void;
  accept?: string;
  hint?: React.ReactNode;
  multiple?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function FileUpload(props: FileUploadProps): React.ReactElement | null;
