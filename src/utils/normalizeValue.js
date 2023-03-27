export const normalizeValue = (value) => {
  const depositMoney = Number(value.replace(/[^\d]/g, "")); // Исключаем запись в поле input всех символов, кроме чисел
  return depositMoney;
};
