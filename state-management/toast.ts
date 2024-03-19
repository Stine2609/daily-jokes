import { store } from './reduxStore';
import { updateToast, updateMessage } from './toastSlice';

export function showToast(message: string, duration: number = 5000) {
    store.dispatch(updateToast(true));
    store.dispatch(updateMessage(message));

    setTimeout(() => {
        store.dispatch(updateToast(false));
    }, duration);

}