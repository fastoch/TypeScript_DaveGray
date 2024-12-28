export interface Item {
  id: string,
  item: string,
  checked: boolean
}

// default export from this file
export default class ListItem implements Item {

  constructor(
    private _id: string = '',  // the underscore is there to indicate it's a private property
    private _item: string = '',
    private _checked: boolean = false
  ) {} 
  // no need to have any assignment between the curly braces because already done when passing
  // the parameters to the constructor

  // we still need to implement our interface properties with getters & setters
  get id(): string {
    return this._id
  }

  get item(): string {
    return this._item
  }

  get checked(): boolean {
    return this._checked
  }

  set id(id: string) {
    this._id = id
  }

  set item(item: string) {
    this._item = item
  }

  set checked(checked: boolean) {
    this._checked = checked
  }
}

