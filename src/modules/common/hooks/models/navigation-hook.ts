export enum Locations {
  LIBRARY = '/library',
  CREATE = '/create',
  VIEW = '/view',
  EDIT = '/edit'
}

export interface INavigationHook {
  navigateTo: (path: string) => void;
}
