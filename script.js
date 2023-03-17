//your code here
function findMajorityElement(arr) {
  const frequencyMap = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > arr.length / 2) {
      return element;
    }
  }

  return -1; // no majority element found
}
