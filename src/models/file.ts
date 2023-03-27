export type Extension = 'jpeg' | 'png' | 'mp4' | 'mp3';

export interface File {
    title: string;
    filename: string;
    extension: Extension;
    dateUploaded: Date;
}