import * as crypto from 'crypto';

export const hashPwd = (p: string): string => {
  const hmac = crypto.createHmac(
    'sha512',
    '45688668ndfhhjgdghjhbhjghjsdfg%^%^%^$%%&$$^%$^$^%',
  );
  hmac.update(p);
  return hmac.digest('hex');
};
