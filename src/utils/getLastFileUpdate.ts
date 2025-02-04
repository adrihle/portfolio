'only server'
import { exec } from "child_process";
import path from "path";
import util from 'util';
import { ProviderLog } from '@/providers/log';

const logger = new ProviderLog('UTIL GETLASTFILEUPDATE');
const execPromise = util.promisify(exec);

const getLastFileUpdate = async ({ filePath }: { filePath: string }): Promise<string | null> => {
  const absolutePath = path.resolve(filePath);
  const relativePath = path.relative(process.cwd(), absolutePath);
  try {
    const { stdout } = await execPromise(`git log -1 --format=%ci -- "${relativePath}"`);
    return stdout.trim();
  } catch (err) {
    logger.error('Error obtaining last update of file', { err });
    return null;
  }
};

export { getLastFileUpdate };
