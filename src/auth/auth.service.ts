import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { AuthLoginDto } from './dto/auth-login-dto';
import { User } from '../user/entities/user.entity';
import { hashPwd } from '../utils/hash-pwd';
import { JwtPayload } from './jwt.strategy';
import { sign } from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { config } from 'src/config/config';

@Injectable()
export class AuthService {
  private createToken(currentTokenId: string): {
    accessToken: string;
    expiresIn: number;
  } {
    const payload: JwtPayload = { id: currentTokenId };
    const expiresIn = 60 * 30 * 24;
    const accessToken = sign(payload, config.jwtKey, {
      expiresIn,
    });
    return {
      expiresIn,
      accessToken,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token: string;
    let userWithToken = null;
    do {
      token = uuid();
      userWithToken = await User.findOne({
        where: {
          currentTokenId: token,
        },
      });
    } while (!!userWithToken);
    user.currentTokenId = token;
    await user.save();

    return token;
  }

  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await User.findOne({
        where: {
          login: req.login,
          pwdHash: hashPwd(req.pwd),
        },
      });
      if (!user) {
        return res.json({ error: 'Invalid login data!' });
      }
      const token = this.createToken(await this.generateToken(user));

      return res
        .cookie('warehouseJwt', token.accessToken, {
          secure: config.jwtHttpsSecure,
          domain: config.jwtCookieDomain,
          httpOnly: true,
        })
        .json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async logout(user: User, res: Response) {
    try {
      user.currentTokenId = null;
      await user.save();
      res.clearCookie('warehouseJwt', {
        secure: config.jwtHttpsSecure,
        domain: config.jwtCookieDomain,
        httpOnly: true,
      });
      return res.json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}
