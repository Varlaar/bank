export const normalizeValue = (value) => Number(value.replace(/[^\d]/g, "")); // Исключаем запись в поле input всех символов, кроме чисел
