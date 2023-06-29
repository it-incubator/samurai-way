export const requiredField = (value: string) => {
  if (value) {
    return undefined;
  } else {
    return "Field is required";
  }
};
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength100 = maxLength(100);
