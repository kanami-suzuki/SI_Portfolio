`use strict`;
console.log('hello');

import AOS from "aos";
import "aos/dist/aos.css";
document.addEventListener("DOMContentLoaded", () => {
  AOS.init()
});

document.addEventListener("DOMContentLoaded", function () {
  let worksList = document.querySelector('#year');
  let defaultValue = document.querySelector('#defaultValue'); // <a>ではなく全体を取得
  let defaultAnchor = defaultValue.querySelector('a'); // <a>要素を取得
  let worksYearItems = document.querySelectorAll('.worksYear_item');

  // 初期テキストを設定（最初のリストアイテムのテキストを表示）
  if (!defaultAnchor.textContent.trim()) {
    defaultAnchor.textContent = worksYearItems[1].querySelector('a').textContent;
  }

  // プルダウンの開閉機能
  worksList.addEventListener('click', (event) => {
    event.preventDefault(); // デフォルトのリンク動作を防ぐ
    console.log("defaultValue clicked");

    // クラスの切り替えでプルダウンを表示・非表示
    if (worksList.classList.contains("worksYear_listVisible")) {
      worksList.classList.remove('worksYear_listVisible');
    } else {
      worksList.classList.add('worksYear_listVisible');
    }
  });

  // リスト項目クリック時にテキストを更新
  worksYearItems.forEach(item => {
    item.addEventListener('click', (event) => {
      let selectedText = item.querySelector('a').textContent; // 選択されたテキストを取得
      defaultAnchor.textContent = selectedText; // <a>タグのテキストを更新

      worksList.classList.remove('worksYear_listVisible'); // プルダウンを閉じる
    });
  });
});