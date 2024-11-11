`use strict`;

import AOS from "aos";
import "aos/dist/aos.css";
document.addEventListener("DOMContentLoaded", () => {
  AOS.init()
});

document.addEventListener("DOMContentLoaded", function () {
  const worksYearList = document.querySelector('.worksYear_list');
  if (worksYearList && worksYearList.classList.contains('worksYear_list')) {
    console.log('true');
    let worksList = document.querySelector('#year');
    let defaultValue = document.querySelector('#defaultValue');
    let defaultAnchor = defaultValue.querySelector('a');
    let worksYearItems = document.querySelectorAll('.worksYear_item');

    if (!defaultAnchor.textContent.trim()) {
      defaultAnchor.textContent = worksYearItems[1].querySelector('a').textContent;
    }

    worksList.addEventListener('click', (event) => {
      event.preventDefault();

      if (worksList.classList.contains("worksYear_listVisible")) {
        worksList.classList.remove('worksYear_listVisible');
      } else {
        worksList.classList.add('worksYear_listVisible');
      }
    });

    worksYearItems.forEach(item => {
      item.addEventListener('click', (event) => {
        let selectedText = item.querySelector('a').textContent;
        defaultAnchor.textContent = selectedText;
      });
    });
  }

  let sp = window.matchMedia("(max-with: 768px)").matches
  let worksItem = this.querySelectorAll('.works_item');
  // worksItem.forEach(item => {
  //   if (sp) {
  // item.setAttribute("data-aos-delay", "100");
  //   }
  // })
});