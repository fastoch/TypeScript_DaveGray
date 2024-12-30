import FullList from "../model/FullList"

interface DOMList {
  ul: HTMLUListElement,
  clear(): void,
  render(fullList: FullList): void
}

export default class ListTemplate implements DOMList {

  // there will only be one instance of this class = a singleton
  static instance: ListTemplate = new ListTemplate()

  ul: HTMLUListElement  

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement 
    // we can check the element's id at line 38 of the index.html file
  }

  clear(): void {
    this.ul.innerHTML = ''
    // clears out the list on the DOM, no need to save that to local storage
    // it's not data, it's just the display
  }

  render(fullList: FullList): void {
    this.clear() // clear what is already there to avoid duplicates

    // fullList is the unique instance of FullList while list is an array of ListItem objects
    // for each item in our list, create an HTML list element along with all required elements
    fullList.list.forEach(item => {
      // create a list item element
      const li = document.createElement("li") 
      li.className = "item"

      // now let's create what's inside this list item element (checkbox, label, and button)
      const check = document.createElement("input")
      check.type = "checkbox"
    })
    // see examples of list items from line 39 to 55 in the index.html file
  }
}

