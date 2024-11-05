export enum Scenarios {
  AUTH = 1,
  FILES = 2,
  FINANCES = 3,
}

export type ScenariosNames = keyof typeof Scenarios
