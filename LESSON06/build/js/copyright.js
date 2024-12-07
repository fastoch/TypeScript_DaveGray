"use strict";
// Classic display of "Copyright + current year" on a web page
// The following assertion (as) removes the null type possibility
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
