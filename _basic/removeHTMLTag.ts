/**
 * @func removeHTMLTag
 * @param {string} str
 * @return {string}
 * @desc π ε»ζζζ¬δΈ­ζζζ η­ΎοΌεͺδΏηζζ¬
 */
export const removeHTMLTag = (str: string): string => str.replace(/<[^>]+>/g, '');
