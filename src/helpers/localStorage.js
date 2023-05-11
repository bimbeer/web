export function setItem(item, nameItem) {
  localStorage.setItem(nameItem, JSON.stringify(item));
}

export function getItem(nameItem) {
  let i = localStorage.getItem(nameItem);
  if (i) {
    return JSON.parse(i);
  }
  return null;
}

export function deleteItem(nameItem) {
  localStorage.removeItem(nameItem);
}

export function clearItems() {
  localStorage.clear();
}
