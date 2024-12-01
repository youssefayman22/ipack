export function getNewItemId(array, itemName) {
  if (array.length <= 0) {
    return { id: 0, itemName: itemName };
  }
  let newId = array[array.length - 1].id + 1;
  return { id: newId, itemName: itemName };
}
