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
    // try and retrieve our list from local storage (format = JSON string)
    const storedList: string | null = localStorage.getItem("myList")

    // do not go any further if storedList is not a string
    if (typeof storedList !== "string") return  

    // otherwise, parse the stored list (convert the JSON string into an array of objects):
    const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

    // for every item in this array, create a new ListItem object and populate our FullList instance
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
      FullList.instance.addItem(newListItem)  
      // we can refer to the class as 'FullList' because we used 'static' at line 15
    })
  }
}
