import config from '../config';

const superSecretKey = config('super_secret_key');

export const doSomething = async () => {
  const useKey = await new Promise(resolve => {
    resolve(superSecretKey.toLowerCase());
  });
  return useKey;
};
