export const makeFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};

export const makeEveryFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  const splitText = text.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] =
      splitText[i].charAt(0).toUpperCase() +
      splitText[i].slice(1).toLowerCase();
  }
  return splitText.join(" ");
};

export const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateUniqId = (array, min, max) => {
  if (array.length >= max - min)
    throw new Error(" you reached max items in the array !!");
  if (min >= max) throw new Error("min number must be lower then max");
  const randomNumber = randomNumBetween(min, max);
  const item = array.findIndex((item) => item._id === randomNumber);
  if (item === -1)
    return randomNumber.toString() + new Date().toLocaleTimeString();
  this.generateId(array);
};
