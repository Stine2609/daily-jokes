import { store } from './reduxStore';
import { addOwnedAvatar, updateAvatar, addOwnedBackground, updateBackground } from './profileSlice';
import { showToast } from './toast';
import { api } from '../api/api';
import { UserDataManager } from '../services/userDataManager';
import { decrementCoins } from './coinSlice';

export interface profileTypes {
    backgroundId: string;
    createdAt: string,
    deviceID: string,
    email: string,
    expoPushToken: string,
    id: number,
    isActive: boolean,
    lastLoginAt: string,
    name: string,
    profile: string,
    profileBackgrounds: [
        {
          backgroundId: string,
          createdAt: string,
          id: number,
          userId: number
        }
    ],
    profilePictures: [
        {
            pictureId: string,
            createdAt: string,
            id: number,
            userId: number
        }
    ]
}

export async function loadProfileToState(profile: profileTypes) {
    try {
        if (profile?.profilePictures) {
            for (let i = 0; i < profile.profilePictures.length; i++) {
                store.dispatch(addOwnedAvatar(parseInt(profile.profilePictures[i].pictureId)));
            }
        }
        if (profile?.profileBackgrounds) {
            for (let i = 0; i < profile.profileBackgrounds.length; i++) {
                store.dispatch(addOwnedBackground(parseInt(profile.profileBackgrounds[i].backgroundId)));
            }
        }
        if (profile?.profile) {
            store.dispatch(updateAvatar(parseInt(profile.profile)));
        }
        if (profile?.backgroundId) {
            store.dispatch(updateBackground(parseInt(profile.backgroundId)));
        }
    } catch (error) {
        console.log(error);
    }
}

export async function buyAvatar(id: number) {
    try {
        let result = await api("POST", "/auth/purchaseProfilePicture", { pictureId: id+"" }, await UserDataManager.getToken());
        store.dispatch(addOwnedAvatar(id));
        selectAvatar(id);
        store.dispatch(decrementCoins(result.price));
    } catch (error) {
        console.log(error);
    }
}

export function selectAvatar(id: number) {
    store.dispatch(updateAvatar(id));
    updateProfilePictureInDatabase(id);
}

async function updateProfilePictureInDatabase(id: number) {
    await api("POST" , "/auth/changeProfilePicture", { pictureId: id+"" }, await UserDataManager.getToken());
}

export async function buyBackground(id: number) {
    try {
        let result = await api("POST", "/auth/purchaseBackground", { backgroundId: id+"" }, await UserDataManager.getToken());
        store.dispatch(addOwnedBackground(id));
        selectBackground(id);
        store.dispatch(decrementCoins(result.price));
    } catch (error) {
        console.log(error);
    }
}

export function selectBackground(id: number) {
    store.dispatch(updateBackground(id));
    updateProfileBackgroundInDatabase(id);
}

async function updateProfileBackgroundInDatabase(id: number) {
    await api("POST" , "/auth/changeBackground", { backgroundId: id+"" }, await UserDataManager.getToken());
}