import openMRSClient from "./client"

export const getPatientByUuid = async () => {
    return await openMRSClient(
        "https://nepalehr.test/openmrs/ws/rest/v1/patient/c3c4a71a-c425-4ad4-86ff-e395a2a89c86?v=full",
        {
            'Cookie': 'JSESSIONID=96B10FBE2AF4F6A613A4494DFC7A20EB'
        },
        (data: any) => data,
        (error: Error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    )
}
