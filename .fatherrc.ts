import { readdirSync } from 'fs';
import { join } from 'path';

const pkgs = readdirSync(join(__dirname, 'packages'));

console.log(pkgs);

export default {
  target: 'node',
  cjs: {
    type: 'babel',
    lazy: true,
  },
  disableTypeCheck: true,
  pkgs,
}