import openMRSClient from './client';

const LOGIN_ENDPOINT = "session?v=custom:(uuid)";

const getEncodedCredentials = (): string => {
    const username: string = process.env.OPENMRS_USER;
    const password: string = process.env.OPENMRS_PASSWORD;

    return Buffer.from(`${username}:${password}`).toString('base64');
};

export const authenticate = async (): Promise<any> => {
    const resouce: string = `${process.env.OPENMRS_ADDRESS}${process.env.OPENMRS_ENDPOINT}${LOGIN_ENDPOINT}`;
    const credentials: string = getEncodedCredentials();

    return await openMRSClient(
        resouce,
        {
            'Authorization': `Basic ${credentials}`
        },
        (data: any) => data,
        (error: Error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    );
};