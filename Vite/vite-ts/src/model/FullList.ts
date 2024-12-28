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

  // creating the only instance of our class (a singleton)
  static instance: FullList = new FullList()
  // because we'll only have one list in our application
  
  // we'll make the constructor private so we cannot modify this unique instance
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list))
  }

  clearList(): void {
    this._list = []
    this.save()
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj)
    this.save()
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id)
    this.save()
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList")
    if (typeof storedList !== "string") return  // do not go any further if storedList is not a string

    // otherwise, parse the stored list to build an array of list items:
    const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

    parsedList.forEach(itemObj => {
      const newListItem = 
    })
  }
}
