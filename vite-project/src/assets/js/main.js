`use strict`;

import AOS from "aos";
import "aos/dist/aos.css";
document.addEventListener("DOMContentLoaded", () => {
  AOS.init()
});

const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
  window.setTimeout(() => {
    loading.classList.add('remove');
  }, 1000)
})

document.addEventListener("DOMContentLoaded", function () {
  let sp = window.matchMedia('(max-width: 768px)')

  const topVisual = document.querySelector('.topVisual_container');
  if (topVisual && topVisual.classList.contains('topVisual_container') && sp.matches) {
    const vHeight = () => {
      const v = window.innerHeight - 78;
      topVisual.style.minHeight = v + 'px';
    }
    vHeight();
    window.addEventListener('resize', vHeight);
  }

  //worksプルダウン
  const worksYearList = document.querySelector('.worksYear_list');
  if (worksYearList && worksYearList.classList.contains('worksYear_list')) {
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

  //aos-delayの調整
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

  //works表示
  const worksContainer = document.querySelector('#works_container');
  if (worksContainer && worksContainer.classList.contains('worksPage_list')) {
    const show = Number(worksContainer.dataset.show);
    const worksContent = document.querySelectorAll('#works_container .works_item');
    const mt = document.querySelector('#works_moreBtn');

    for (let i = 0; i < worksContent.length; i++) {
      if (i >= show) {
        worksContent[i].style.display = "none";
        worksContent[i].setAttribute("data-mt", "false");
      } else {
        worksContent[i].style.display = "block";
        worksContent[i].setAttribute("data-mt", "true");
      }
    }

    const updateMoreButtonVisibility = () => {
      const hiddenItems = Array.from(worksContent).some(
        (item) => item.getAttribute("data-mt") === "false"
      );
      mt.style.display = hiddenItems ? "flex" : "none";
    };
    updateMoreButtonVisibility();

    const worksYearItem = document.querySelectorAll('.worksYear_item a');
    for (let a = 0; a < worksYearItem.length; a++) {
      worksYearItem[a].addEventListener('click', () => {
        for (let i = 0; i < worksContent.length; i++) {
          if (i >= show) {
            worksContent[i].style.display = "none";
            worksContent[i].setAttribute("data-mt", "false");
          } else {
            worksContent[i].style.display = "block";
            worksContent[i].setAttribute("data-mt", "true");
          }
        }
      })
    }

    let showCount = show;
    mt.addEventListener('click', (e) => {
      e.preventDefault();
      showCount += show;

      for (let i = 0; i < worksContent.length && i < showCount; i++) {
        worksContent[i].style.display = "block";
        worksContent[i].removeAttribute("data-mt", "false");
        worksContent[i].setAttribute("data-mt", "true");
      }
      updateMoreButtonVisibility();
    })
  }

});