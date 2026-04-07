export function randomHash(num: number) {
  const options = "adsfhglqwertyuiozxcvbnm312446890";
  const len = options.length;
  let ans = "";
  for (let i = 0; i < num; i++) {
    ans = ans + Math.floor(Math.random() * len);
  }

  return ans;
}
