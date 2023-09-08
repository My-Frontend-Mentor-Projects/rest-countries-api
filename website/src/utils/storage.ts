export const addValueToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeValueFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const getValueFromLocalStorage = (key: string): any => {
  const result = localStorage.getItem(key);
  const data = result ? JSON.parse(result) : null;
  return data;
};
