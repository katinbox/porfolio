(() => {
  const filterContainer = document.querySelector(".porfolio-filter")
  const porfolioItemContainer = document.querySelector(".porfolio-items")
  const porfolioItems = document.querySelectorAll(".porfolio-item")

  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains('filter-item') && !e.target.classList.contains('active')) {
      filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      e.target.classList.add("active", "outer-shadow")
      const target = e.target.getAttribute('data-target')
      porfolioItems.forEach((item) => {
        if (target  === item.getAttribute('data-category') || target === 'all') {
          item.classList.remove("hide")
          item.classList.add("show")
        }
        else {
          item.classList.remove("show")
          item.classList.add("hide")
        }
      })
    }
  })
}
)();
