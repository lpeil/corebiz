const toMoney = (value) => {
  if (!value) return '';

  const valueString = value.toString();
  return `R$ ${valueString.slice(0, -2)},${valueString.slice(-2)}`;
};

export default toMoney;
