import { ButtonProps } from '@mui/material';
import { FC } from 'react';
export type DownloadFileButtonProps = ButtonProps & {
    file: Blob | MediaSource | {
        text: string;
        mimeType: "plain" | "csv";
        name: string;
        charset?: string;
        extension?: string;
    };
};
declare const DownloadFileButton: FC<DownloadFileButtonProps>;
export default DownloadFileButton;
