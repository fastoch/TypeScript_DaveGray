import ListItem from './ListItem'

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void 
}

export default class FullList implements List {

  // we'll make the constructor private because we want to create a singleton
  // that means there will only be one instance of this class created
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list
  }

  load(): void {

  }

  save(): void {

  }

  clearList(): void {
    
  }

  addItem(itemObj: ListItem): void {

  }

  removeItem(id: string): void {
    
  }
}
