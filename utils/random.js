import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { UserDataManager } from '../services/userDataManager';

export const generateRandomCredentials = async () => {
    const deviceID = await generateDeviceID();

    const name = `User-${deviceID.substring(0, 8)}`; 
    const email = `${deviceID}@temporary.email`; 
    const password = uuidv4();

    return { name, email, password, deviceID };
};

const generateDeviceID = async () => {
    let localDeviceID = await UserDataManager.getDeviceID();

    if (localDeviceID) {
        return localDeviceID;
    } else {
        const newDeviceID = uuidv4();

        await UserDataManager.storeDeviceID(newDeviceID);

        return newDeviceID;
    }
};