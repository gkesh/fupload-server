import { Agent } from 'https';
import fetch from 'node-fetch';

const openMRSClient = async (url: string, headers: any, success: (data: any) => any, fialure: (error: Error) => void) => {
    const agent: Agent = new Agent({
        rejectUnauthorized: false
    });

    return await fetch(
        url,
        {
            headers,
            agent
        }
    ).then(response => {
        return success(response.json());
    })
    .catch(fialure);
};

export default openMRSClient;