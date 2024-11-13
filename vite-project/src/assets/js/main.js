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

  let sp = window.matchMedia('(max-width: 768px)')
  console.log(sp.matches);
  let worksItem = document.querySelectorAll('.works_item');
  const cListner = (e) => {
    worksItem.forEach((item, index) => {
      if ((e.matches) && (index % 2 === 0)) {
        item.setAttribute("data-aos-delay", "100");
      } else if ((e.matches) && (index % 2 === 1)) {
        item.setAttribute("data-aos-delay", "300");
      } else if ((!e.matches) && (index % 3 === 0)) {
        item.setAttribute("data-aos-delay", "100");
      } else if ((!e.matches) && (index % 3 === 1)) {
        item.setAttribute("data-aos-delay", "300");
      } else if ((!e.matches) && (index % 3 === 2)) {
        item.setAttribute("data-aos-delay", "600");
      }
    })
  }
  sp.addEventListener("change", cListner);
  cListner(sp);
});