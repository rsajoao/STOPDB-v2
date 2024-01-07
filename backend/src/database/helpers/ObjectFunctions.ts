export function compareObjects(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
): boolean {
  const keys1: string[] = Object.keys(obj1);
  const keys2: string[] = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
