export type Extension = 'jpeg' | 'png' | 'mp4' | 'mp3';

export interface File {
    title: string;
    extension: Extension;
    size: number;
    resolution?: [number, number];
    dateUploaded: Date;
}