function stringToHash(str: string) {
  let hash = 0;

  if (str.length == 0) return '0';

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return String(Math.abs(hash));
}
