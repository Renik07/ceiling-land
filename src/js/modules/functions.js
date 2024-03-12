// Проверка поддержки webp, добавление класса webp, no-webp для HTML

export function isWebp() {
  // Проверка поддержки webp
  function testWebP(cb) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      cb(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // добавление класа _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}