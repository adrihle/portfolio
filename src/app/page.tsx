import { Playground } from "@/containers";
import { exec } from 'child_process';
import cache from 'memory-cache';
import util from 'util';

const execPromise = util.promisify(exec);
const PACKAGES = 'root#packages';

const getFilteredPackages = async (): Promise<string[]> => {
  try {
    const cached = cache.get(PACKAGES);
    if (cached) return cached;
    const { stdout } = await execPromise('npm search @adrihfly --json');
    const result = JSON.parse(stdout);
    cache.put(PACKAGES, result, 1000 * 10);
    return result;
  } catch (error) {
    console.error('Error al obtener los paquetes:', error);
    return [];
  }
};

const Home = async () => {
  const packages = await getFilteredPackages();
  return (
    <Playground packages={packages} />
  );
};

export default Home;
