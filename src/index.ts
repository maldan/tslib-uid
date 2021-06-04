import SHA1 from 'sha1';
import * as Os from 'os';
import { EArray } from '@maldan/tslib-earray';

const USER_STAMP = `${JSON.stringify(
  Os.userInfo(),
)}_${Os.version()}_${Os.type()}_${Os.release()}_${Os.platform()}_${Os.hostname()}_${Os.arch()}_${Os.totalmem()}_${JSON.stringify(
  Os.cpus(),
)}`;

export function UID(size: number = 12): string {
  let h = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 4; i++) {
    h += SHA1(
      `${Math.random()}_${Math.random()}_sasageo_${new Date().getTime()}_${Os.freemem()}_${USER_STAMP}`,
    );
  }
  return new EArray(h).shuffle().join('').slice(0, size);
}
