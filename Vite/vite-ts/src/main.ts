// see details in README.md > Chapter 11

import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './template/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement //index.html > line 19
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault() // so the form submission doesn't reload the page
    // ...
  })

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener('click', )
}

// once the DOM content is loaded, run our initApp function
document.addEventListener("DOMContentLoaded", initApp)
