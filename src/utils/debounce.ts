/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce<T extends (...args: any[]) => void>(fn: T, ms = 0): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

export { debounce };
