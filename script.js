(function () {
  "use strict";

  const grid = document.getElementById("card-grid");
  const emptyState = document.getElementById("empty-state");
  const resultCount = document.getElementById("result-count");
  const searchInput = document.getElementById("header-search-input");
  const filterBar = document.querySelector(".filter-bar");

  let activeFilter = "all";
  let searchTerm = "";

  function cardTemplate(ext) {
    return `
      <a class="card" data-category="${ext.category}" href="articles/${ext.id}.html">
        <div class="card-top">
          <span class="card-icon card-icon-fallback" data-icon-fallback aria-hidden="true">${ext.name.charAt(0)}</span>
          <img class="card-icon" src="${ext.icon}" alt="" width="40" height="40" loading="lazy" data-icon-img hidden>
          <span class="card-tag">${CATEGORY_LABELS[ext.category]}</span>
        </div>
        <h3 class="card-name">${ext.name}</h3>
        <p class="card-tagline">${ext.tagline}</p>
        <p class="card-desc">${ext.description}</p>
        <div class="card-footer">
          <span class="card-trial">14日間無料</span>
          <span class="card-price">¥1,980〜</span>
        </div>
      </a>
    `;
  }

  function render() {
    const term = searchTerm.trim().toLowerCase();

    const filtered = EXTENSIONS.filter((ext) => {
      const matchesCategory = activeFilter === "all" || ext.category === activeFilter;
      const matchesSearch =
        !term ||
        ext.name.toLowerCase().includes(term) ||
        ext.tagline.toLowerCase().includes(term) ||
        ext.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filtered.map(cardTemplate).join("");
    resultCount.textContent = `${filtered.length}件の道具を表示中`;
    emptyState.hidden = filtered.length !== 0;
    setupIconFallbacks();
  }

  function setupIconFallbacks() {
    grid.querySelectorAll("[data-icon-img]").forEach((img) => {
      const showImage = () => {
        if (img.naturalWidth > 1) {
          img.hidden = false;
          img.previousElementSibling.hidden = true;
        }
      };
      if (img.complete) {
        showImage();
      } else {
        img.addEventListener("load", showImage);
      }
      img.addEventListener("error", () => {
        img.hidden = true;
      });
    });
  }

  function setupCounts() {
    document.querySelectorAll(".chip-count[data-count]").forEach((el) => {
      const key = el.dataset.count;
      if (key === "all") return;
      const count = EXTENSIONS.filter((e) => e.category === key).length;
      el.textContent = count;
    });
  }

  function setupFilterBar() {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      filterBar.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter;
      render();
    });
  }

  function setupSearch() {
    let debounceId;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceId);
      debounceId = setTimeout(() => {
        searchTerm = e.target.value;
        render();
      }, 120);
    });
  }

  setupCounts();
  setupFilterBar();
  setupSearch();
  render();
})();
