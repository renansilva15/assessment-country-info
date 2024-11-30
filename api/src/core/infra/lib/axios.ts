import axios from 'axios';

// TODO: De-couple this with Adapter Pattern.
export const sharedAxiosInstance = axios.create();
