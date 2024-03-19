import { store } from './reduxStore';
import { updateCoins } from './coinSlice';
import { addOwnedAvatar, updateAvatar, addOwnedBackground, updateBackground } from './profileSlice';
import { showToast } from './toast';

export function buyAvatar(id: number) {
    let coins = store.getState().coins.coins;
    let price = store.getState().profile.avatarPrice;
    if (coins >= price) {
        store.dispatch(addOwnedAvatar(id));
        store.dispatch(updateCoins(coins - price));

        selectAvatar(id);
    } else {
        showToast("You cannot afford this avatar");
    }
}

export function selectAvatar(id: number) {
    store.dispatch(updateAvatar(id));
}

export function buyBackground(id: number) {
    let coins = store.getState().coins.coins;
    let price = store.getState().profile.backgroundPrice;
    if (coins >= price) {
        store.dispatch(addOwnedBackground(id));
        store.dispatch(updateCoins(coins - price));

        selectBackground(id);
    } else {
        showToast("You cannot afford this background");
    }
}

export function selectBackground(id: number) {
    store.dispatch(updateBackground(id));
}