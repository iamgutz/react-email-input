export const EMAIL_REGEXP = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
export const validEmailFormat = value => EMAIL_REGEXP.test(value);