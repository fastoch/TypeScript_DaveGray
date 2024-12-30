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
    
  }
}

