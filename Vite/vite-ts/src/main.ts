// see details in README.md > Chapter 11

import './css/style.css' // apply our CSS
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  // handle the form that allows us to add new list items
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement //index.html > line 19
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault() // so the form submission doesn't reload the page
    const input = document.getElementById('newItem') as HTMLInputElement  //index.html > line 21
    const newEntryText: string = input.value.trim()
    if (!newEntryText) return // so we don't add empty items to our list
    
    // we need to calculate the new item's ID
    const itemId: number = fullList.list.length
      // if our list has a length, assign the new item the ID of the last item + 1
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      // otherwise, assign the new item the ID of 1
      : 1

    // create a new ListItem object and add it to our list
    const newItem = new ListItem(itemId.toString(), newEntryText)  // The 'checked' property is not required as it defaults to false
    fullList.addItem(newItem)

    // render the new item on the web page
    template.render(fullList)
  })

  // handle the "Clear" button
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener('click', (): void => {
    fullList.clearList() // clear the data stored in localStorage
    template.clear() // clear what's displayed on the web page
  })

  fullList.load() // load the data
  template.render(fullList) // load the corresponding HTML elements
}

// once the DOM content is loaded, run our initApp function
document.addEventListener("DOMContentLoaded", initApp)
