/**
 * @func getBaseUrl
 * @param {string} url
 * @returns {string}
 * @desc ð è·å ? åé¢çurl
 */
export const getBaseUrl = (url: string): string => {
    return url.includes('?') ? url.split('?')[0] : url;
};
