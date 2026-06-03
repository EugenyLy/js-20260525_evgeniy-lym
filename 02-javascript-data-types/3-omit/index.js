/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const fieldsArr = Array.from(fields);
  const result = obj;
  for (const [key, value] of Object.entries(obj)) {
    fieldsArr.forEach(name => {
      if (name === key) {
        delete result[key];
      }
    });
  }
  return result;
};
