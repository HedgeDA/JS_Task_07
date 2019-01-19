let tabsNav;
const tabsContent=[];
let activeTab;

function tabClick(event) {
  if (activeTab === event.target.parentElement) {
    return false;
  }

  activeTab.classList.remove('ui-tabs-active');
  activeTab = event.target.parentElement;
  activeTab.classList.add('ui-tabs-active');

  tabsContent.forEach(tab => {
      if (!tab.classList.contains('hidden')) {
        tab.classList.add('hidden')
      }
      if (tab.dataset.tabTitle === activeTab.firstElementChild.textContent) {
        tab.classList.remove('hidden')
      }
    })
}

function init() {
  tabsNav = document.querySelector('.tabs-nav');

  let tabTemplate = tabsNav.removeChild(tabsNav.firstElementChild);

  Array.from(document.querySelector('.tabs-content').children).forEach(tab => {
    tabsContent.push(tab);

    let newTab = tabsNav.appendChild(tabTemplate.cloneNode(true));

    newTab.firstElementChild.textContent = tab.dataset.tabTitle;
    newTab.firstElementChild.classList.add(tab.dataset.tabIcon);
    newTab.firstElementChild.addEventListener('click', tabClick);

    if (!activeTab) {
      newTab.classList.add('ui-tabs-active');

      activeTab = newTab;
    } else {
      tab.classList.add('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
