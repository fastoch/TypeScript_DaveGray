// see details in README.md > Chapter 11

import './css/style.css'
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
    const input = document.getElementById('newItem') as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText) return // so we don't add empty items to our list
    
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
