import { Extension, File } from '../models/file';
import { UPLOAD_DIR } from '../config';
import { readdir } from 'fs/promises';

const count = (): number => {
    return 0;
}

const listAll = async (): Promise<File[] | null> => {
    const uploads: File[] = [];

    try {
        const files = await readdir(UPLOAD_DIR);

        files.forEach(file => {
            const [timestamp, ...filename] = file.split("_");
            let extensionCheck = file.split(".").splice(-1)[0];

            if (!["jpg", "jpeg", "png", "mp3", "mp4"].includes(extensionCheck)) {
                return;
            }

            const extension = extensionCheck as Extension;

            // Skips invalid extensions and files that dont match naming schemes
            const upload: File = {
                title: filename.join("_"),
                filename: file,
                extension,
                dateUploaded: new Date(parseInt(timestamp, 10))
            };

            uploads.push(upload);
        });
    } catch (error) {
        return null;
    }

    return uploads;
}

export {
    count,
    listAll
}