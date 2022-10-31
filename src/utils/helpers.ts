export const classNames = (
  condition: Function | boolean,
  optionOne: string,
  optionTwo: string = ""
) => (condition ? optionOne : optionTwo);

export const nameShrinker = (name: string, length: number) =>
  name.length > length ? name.slice(0, length) + "..." : name;

export const countReducer = (count: number, limit: number) =>
  count > limit ? `${limit}+` : count;
