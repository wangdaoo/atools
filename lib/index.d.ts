declare const getTypeOf: (param: unknown) => string;

declare const is: (value: any, type: string) => boolean;

declare const wait: (milliseconds: number) => Promise<unknown>;

declare const copyToClipboard: (text: string) => Promise<void>;

declare const getFromClipboard: () => Promise<string>;

declare const throttle: (fn: Function, ms?: number) => Function;

declare const removeHTMLTag: (str: string) => string;

declare const isBrowser: boolean;

declare const getCookie: (name?: string) => Array<string> | string | undefined;

declare const clearCookie: () => void;

declare const getBaseUrl: (url: string) => string;

declare const getUrlParams: (url: string) => object;

declare const goToTop: () => void;

declare const log: {
    info: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    success: (...args: any[]) => void;
    color: (color: string) => (...args: any[]) => any;
};

declare const average: (numbers: number[]) => number;

declare const sum: (numbers: number[]) => number;

declare const diffCount: (a: number, b: number) => number;

interface Point {
    x: number;
    y: number;
}
declare const coorDistance: (p1: Point, p2: Point) => number;

declare const isMobile: (str: string) => boolean;

declare const isRegexWith: (regex: RegExp, str: string) => boolean;

declare const isEmail: (str: string) => boolean;

declare const isUrl: (str: string) => boolean;

declare const isChinese: (str: string) => boolean;

declare const isIdCard: (str: string, type?: number) => boolean;

declare function diffDays(date1: Date, date2: Date): number;

declare function formatSeconds(seconds: number, format?: string): string;

declare const randomInt: (min: number, max: number) => number;

declare const randomIP: (type?: number) => string;

declare const randomColor: (type?: number) => string;

export { average, clearCookie, coorDistance, copyToClipboard, diffCount, diffDays, formatSeconds, getBaseUrl, getCookie, getFromClipboard, getTypeOf, getUrlParams, goToTop, is, isBrowser, isChinese, isEmail, isIdCard, isMobile, isRegexWith, isUrl, log, randomColor, randomIP, randomInt, removeHTMLTag, sum, throttle, wait };
