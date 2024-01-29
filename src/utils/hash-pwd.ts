import * as crypto from 'crypto';
import { config } from 'src/config/config';

export const hashPwd = (pwd: string): string => {
  const hmac = crypto.createHmac('sha512', config.pwdKey);
  hmac.update(pwd);
  return hmac.digest('hex');
};
