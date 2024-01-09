window.addEventListener("DOMContentLoaded", () => {
    const dp = document.getElementById('chatWidgetToggleButton');
    const contentWrapper = document.getElementById('chatContentWrapper');
    const tabsContentWrapper = document.getElementById('myTabContent');
    const tabListWrapper = document.getElementById('chat-tablist');
    const extandBtn = document.getElementById('chatExtand');
    const maximizeBtn = document.getElementById('chatMaximizeCTA');
    const backCTA = document.getElementById('chatBackCTA');
    const chatUserName = document.getElementById('chatUserName');
    const chatPost = document.getElementById('chatPost');

    const chatPanelConversationBtn = document.getElementById('chatPanelConversation');
    const chatPanelInformationBtn = document.getElementById('chatPanelInformation');

    //const chatNavItems = contentWrapper.querySelectorAll('.chat-nav-item');
    //const moreInfoBtn = contentWrapper.querySelectorAll('.expand-btn');
    const closeDetailInfo = document.getElementById('closeDetailInfo');
    //const chatInformationList = contentWrapper.querySelectorAll('.chat-information-list');
    //const chatInformationDetail = contentWrapper.querySelectorAll('.chat-information-detail');

    /*
    dp.addEventListener('click', () => {
        let _this = event.target;
        let _parent = _this.parentNode;
        let _siblingMenu = _parent.querySelectorAll('.dropdown-menu')[0];

        _parent.classList.toggle('open');
        
        if (_parent.classList.contains('open')) {
            _this.setAttribute("aria-expanded", true);
            _siblingMenu.setAttribute("aria-expanded", true);
            _siblingMenu.setAttribute("aria-hidden", false);
        } else {
            _this.setAttribute("aria-expanded", false);
            _siblingMenu.setAttribute("aria-expanded", false);
            _siblingMenu.setAttribute("aria-hidden", true);
        }
    });

    //
    extandBtn.addEventListener('click', () => {
        // let _this = event.target;
        contentWrapper.classList.add('extended');
    });

    //
    maximizeBtn.addEventListener('click', () => {
        let _this = event.target;
        let i = false;
        _this.classList.toggle('maximized');

        if (_this.classList.contains('maximized')) {
            contentWrapper.classList.add('extended');
            contentWrapper.classList.add('maximized');

            chatNavItems.forEach(item => {
                if (item.parentNode.classList.contains('active')) {
                    i = true;
                }
            });

            if (!i) {
                let elem = { target: chatNavItems[0]};
                changeTabsX(elem);
            }
        } else {
            contentWrapper.classList.remove('tab-info-content');
            tabListWrapper.classList.remove('extended');
            contentWrapper.classList.remove('maximized');
        }
    });

    chatPanelConversationBtn.addEventListener('click', () => {
        contentWrapper.classList.remove('tab-info-content');
        chatInformationList.forEach(item => {
                    item.removeAttribute("hidden");
            });
        chatInformationDetail.forEach(item => {
                    item.setAttribute("hidden", true);
            });
    });

    chatPanelInformationBtn.addEventListener('click', () => {
        contentWrapper.classList.add('tab-info-content');
        chatInformationList.forEach(item => {
                    item.removeAttribute("hidden");
            });
        chatInformationDetail.forEach(item => {
                    item.setAttribute("hidden", true);
            });
    });

    //
    backCTA.addEventListener('click', () => {
        let _maximized = contentWrapper.classList.contains('maximized');
        let _selected = contentWrapper.classList.contains('selected');

        if (_maximized) {

        } else if (_selected) {
            contentWrapper.classList.remove('selected');
            chatNavItems.forEach(item => {
                item.parentNode.classList.remove('active');
            });
            // Hide all tab panels
            tabsContentWrapper
                .querySelectorAll('[role="tabpanel"]')
                .forEach(p => p.setAttribute("hidden", true));

        } else {
            contentWrapper.classList.remove('extended');
        }
    });

    //
    tabListWrapper.addEventListener('scroll', (e) => {
        if (e.target.scrollTop > 10) {
            tabListWrapper.classList.add('scrolled');
        } else { tabListWrapper.classList.remove('scrolled') }
    });

    //
    chatNavItems.forEach(item => {
        item.addEventListener("click", changeTabsX);
    });

    moreInfoBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            var _this = e.target;

            chatInformationList.forEach(item => {
                        item.setAttribute("hidden", true);
                });
            chatInformationDetail.forEach(item => {
                        item.removeAttribute("hidden");
                });
        });
    });

    closeDetailInfo.addEventListener("click", () => {
        chatInformationList.forEach(item => {
                    item.removeAttribute("hidden");
            });
        chatInformationDetail.forEach(item => {
                    item.setAttribute("hidden", true);
            });
    });
*/
    //
    function changeTabsX(e) {
        const target = e.target.closest('button');
        const parent = target.parentNode;
        const targetLabel = target.querySelectorAll('.chat-name-full')[0].childNodes[0].nodeValue;
        const targetLastEntry = target.querySelectorAll('.chat-name-full')[0].childNodes[1].innerHTML;

        let j = `<div class="popup-wrapper">
                    <span id="popoverTrigger" tabindex="0" class="vismaicon vismaicon-sm vismaicon-filled vismaicon-info popover-trigger" aria-describedby="popover"></span>
                    <div id="popover" class="popover bottom" style="left: -9.2rem; top: 4rem;">
                        <div class="arrow"></div>
                        <h3 class="popover-title">Kids:</h3>
                        <ul class="popover-content">
                            <li>Noora Riley</li>
                            <li>Lewie Ridley</li>
                            <li>Sarah Ridely</li>
                        </ul>
                    </div>
                </div>`;

        chatUserName.innerHTML = targetLabel + j + "<small>" + targetLastEntry + "</small>";

        //
        contentWrapper.classList.remove('tab-info-content');
        contentWrapper.classList.add('selected');

        //
        chatPost.removeAttribute("hidden");
        
        chatInformationList.forEach(item => {
                    item.removeAttribute("hidden");
            });
        chatInformationDetail.forEach(item => {
                    item.setAttribute("hidden", true);
            });

        // Remove all current selected tabs
        chatNavItems.forEach(
                item => {
                    item.setAttribute("aria-selected", false);
                    item.parentNode.classList.remove('active');
                }
            );

        // Set this tab as selected
        target.setAttribute("aria-selected", true);

        // Set active classes to this selected tab
        parent.classList.add('active');

        // Hide all tab panels
        tabsContentWrapper
            .querySelectorAll('[role="tabpanel"]')
            .forEach(p => p.setAttribute("hidden", true));

        // Show the selected panel
        tabsContentWrapper
            .querySelector('#' + target.getAttribute("aria-controls"))
            .removeAttribute("hidden");
    }
});
//---before
//--- Custom small scripts
function mainFunction () {
    const remCookies = document.getElementById("remCookies");
  
  
  
  
      // DOM element(/tag element) creation
      function createElement(tagName, classNames, attributes, text) {
          let element = document.createElement(tagName),
              i, len;
          if (classNames && classNames.length) {
              for (i = 0, len = classNames.length; i < len; i++) {
                  element.classList.add(classNames[i]);
              }
          }
          if (attributes && attributes.length > 0) {
              for (i = 0, len = attributes.length; i < len; i++) {
                  for (let key in attributes[i]) {
                      if (key) {
                          element.setAttribute(key, attributes[i][key]);
                      }
                  }
              }
          }
          if (text) {
              element.textContent = text;
          }
          return element;
      } // End [createElement(tagName, classNames, attributes, text)]
  
  
      // move children nodes to a different place
      function moveChildrenNode(oldParent, newParent) {
          while (oldParent.childNodes.length > 0) {
              newParent.appendChild(oldParent.childNodes[0]);
          };
      }
  
      // init value for window width
      let windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
      // log/find all main/horizontal navigation
      let navs = document.querySelectorAll('.navbar');
  
  
      // *** --- ***
      // Main Navigation responsive functionality
      navs.forEach(nav => {
          // ** Variable block
          const navID = nav.id;
  
          // let navObj = {};
  
          // * Variable for main blocks
          // external apps links wrapper
          let navbarHeader = nav.querySelector('.navbar-header');
          // navbar dropdown wrapper
          let navbarHeaderAppWrapper = (navbarHeader !== null) ? navbarHeader.querySelector('.navbar-brand') : null;
  
          // main nav content wrapper
          let navContent = nav.querySelector('.navbar-collapse');
          // main nav first level wrapprer
          let navFirstlvlWrapper = (navContent !== null) ? navContent.querySelector('.first-level:not(.context-selector)') : null;
          // main nav contextual/right nav wrapper
          let navContextSelectorMenu = (navContent !== null) ? navContent.querySelector('.context-selector') : null;
  
          // * Variable main nav first level block
          // first level item array
          let firstlvlChildren = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.querySelectorAll(':scope > li:not(.menudrop)') : [];
          // first level overflow main wrapper
          let overflowFirstlvlWrapper = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.querySelector('.menudrop') : null;
              // first level overflow dropdown menu open/close button
              let overflowFirstlvlMenuDropTrigger = (overflowFirstlvlWrapper !== null) ? overflowFirstlvlWrapper.querySelector('.dropdown-toggle') : null;
              // first level overflow dropdown menu content wrapper
              let overflowFirstlvlMenuDropContent = (overflowFirstlvlWrapper !== null) ? overflowFirstlvlWrapper.querySelector('.dropdown-menu') : null;
                  // first level overflow list items
                  let overflowFirstlvlList = (overflowFirstlvlMenuDropContent !== null) ? overflowFirstlvlMenuDropContent.querySelectorAll(':scope > li:not(.navbar-brand)') : [];
                  // first level overflow menu wrapper for the external apps links
                  let overflowFirstlvlDropdownAppListWrapper = (overflowFirstlvlMenuDropContent !== null) ? overflowFirstlvlMenuDropContent.querySelector('.navbar-brand') : null;
  
          // * VAriable main nav for contextual/right nav-bar
          // main level other icon list array
          let navContextSelectorIcons = (navContextSelectorMenu !== null) ? navContextSelectorMenu.querySelectorAll(':scope > .icon:not(.user-dropdown):not(.icon-dropdown):not(.navbar-form):not(.shopping-cart)') : [];
          // search form main wrapper
          let navSearchWrapper = (navContextSelectorMenu !== null) ? navContextSelectorMenu.querySelector('.navbar-form') : null;
          // shopping card wrapper
          let navShoppingCardWrapper = (navContextSelectorMenu !== null) ? navContextSelectorMenu.querySelector('.shopping-cart') : null;
          // main level icon overflow dropdow wrapper
          let navContextSelectorIconOverflowWrapper = (navContextSelectorMenu !== null) ? navContextSelectorMenu.querySelector('.icon-dropdown') : null;
              // first level icon overflow dropdown menu open/close button
              let navContextSelectorIconOverflowTrigger = (navContextSelectorIconOverflowWrapper !== null) ? navContextSelectorIconOverflowWrapper.querySelector('.dropdown-toggle') : null;
              // first level icon overflow dropdown menu content wrapper
              let navContextSelectorIconOverflowContent = (navContextSelectorIconOverflowWrapper !== null) ? navContextSelectorIconOverflowWrapper.querySelector('.dropdown-menu') : null;
          // user dropdown wrapper
          let navUserDropdownWrapper = (navContextSelectorMenu !== null) ? navContextSelectorMenu.querySelector('.user-dropdown') : null;
              // user dropdown is icon
              let navUserDropdownisIcon = (navUserDropdownWrapper !== null) ? navUserDropdownWrapper.classList.contains('icon') : false;
  
          // * Other variable block
          let _isMobile = false;
  
          // overall main nav width (how much space it can have available).
          let navWrapperWidth = nav.clientWidth;
          // if exist, the app brand wrapper width, otherwise set the value to 0
          let brandWrapperWidth = (navbarHeader !== null) ? navbarHeader.clientWidth : 0;
          // if exist, the first level wrapper width, otherwise set the value to 0
          let navFirstlvlWrapperWidth = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.clientWidth : 0;
          // if exist, the contextual menu (right nav bar menu) wrapper width, otherwise set the value to 0
          let navContextMenuWrapperWidth = (navContextSelectorMenu !== null) ? navContextSelectorMenu.clientWidth : 0;
              // remaining space available
              let restWidth = navWrapperWidth - brandWrapperWidth - navFirstlvlWrapperWidth - navContextMenuWrapperWidth;
  
          // main nav overflow wrapper width
          let overflowFirstlvlWrapperWidth = 92;
          // main nav icons overflow wrapper width
          let navContextSelectorIconOverflowWidth = 60;
  
  
          // ** Adding esential nain nav elements if are missing
          // add the menu header wrapper if is missing
          if(navbarHeader === null) {
              navbarHeader = createElement('div', ['navbar-header']);
  
              nav.appendChild(navbarHeader);
          }
  
          // add the main apps wrapper if is missing
          if(navbarHeaderAppWrapper === null) {
              navbarHeaderAppWrapper = createElement('div', ['navbar-brand', 'dropdown']);
  
              navbarHeader.appendChild(navbarHeaderAppWrapper);
          }
  
          // add the main nav content wrapper if is missing
          if(navContent === null) {
              const navContentID = navID + 'CollapseMain';
              navContent = createElement('nav', ['collapse', 'navbar-collapse'], [{id: navContentID},{'aria-label': 'Menu'}]);
  
              nav.appendChild(navContent);
          }
  
          // add the first level (main nav link list) wrapper if is missing
          if(navFirstlvlWrapper === null) {
              const navFirstlvlID = navID + 'FlMenu';
              navFirstlvlWrapper = createElement('ul', ['nav', 'navbar-nav', 'nav-tabs', 'first-level'], [{id: navFirstlvlID}, {role: 'menubar'},{'aria-label': 'Menu'}]);
  
              navContent.appendChild(navFirstlvlWrapper);
          }
  
          // add the overflow wrapper if is missing
          if(overflowFirstlvlWrapper === null) {
              overflowFirstlvlWrapper = createElement('li', ['menudrop', 'dropdown', 'hidden']);
  
              navFirstlvlWrapper.appendChild(overflowFirstlvlWrapper);
          }
  
          // add the overflow trigger if is missing
          if(overflowFirstlvlMenuDropTrigger === null) {
              const overflowMenuDropTriggerID = navID + 'MenuDropTrigger';
              overflowFirstlvlMenuDropTrigger = createElement('a', ['dropdown-toggle'], [{id: overflowMenuDropTriggerID}, {href: '#!'}, {role: 'button'}, {'data-toggle': 'dropdown'}, {'aria-haspopup': true}, {'aria-expanded': false}]);
              overflowFirstlvlMenuDropTriggerLabel = createElement('span', ['hidden'], null, 'Menu');
              overflowFirstlvlMenuDropTriggerIcon = createElement('i', ['icon-align-justify']);
  
              overflowFirstlvlMenuDropTrigger.appendChild(overflowFirstlvlMenuDropTriggerLabel);
              overflowFirstlvlMenuDropTrigger.appendChild(overflowFirstlvlMenuDropTriggerIcon);
              overflowFirstlvlWrapper.appendChild(overflowFirstlvlMenuDropTrigger);
          }
  
          // add the overflow dropdown menu wrapper if is missing
          if(overflowFirstlvlMenuDropContent === null) {
              const overflowMenuDropContentID = navID + 'MenuDropContent';
              overflowFirstlvlMenuDropContent = createElement('ul', ['dropdown-menu'], [{id: overflowMenuDropContentID}, {role: 'menu'}, {'aria-expanded': false}, {'aria-hidden': true}]);
  
              overflowFirstlvlWrapper.appendChild(overflowFirstlvlMenuDropContent);
          }
  
          // add the app list wrapper, for the mobile design, if is missing
          if(overflowFirstlvlDropdownAppListWrapper === null) {
              const overflowFirstlvlDropdownAppListWrapperID = navID + 'Brand';
              overflowFirstlvlDropdownAppListWrapper = createElement('li', ['dropdown', 'navbar-brand', 'hidden'], [{id: overflowFirstlvlDropdownAppListWrapperID}]);
  
              overflowFirstlvlMenuDropContent.prepend(overflowFirstlvlDropdownAppListWrapper);
          }
  
  
          // ** Initial width and order for esential main nav elements
          // initial width and order for first level items
          if (firstlvlChildren.length > 0) {
              firstlvlChildren.forEach((menuitem, index) => {
                  menuitem.order = index;
                  menuitem.initwidth = menuitem.clientWidth;
              });
          };
  
          // icon items in navbar right
          if((navContextSelectorMenu !== null) && navContextSelectorIcons.length > 0) {
              // add initial order for all the direct children in navbar right/contextual menu wrapper
              Array.prototype.forEach.call(navContextSelectorMenu.children, (item, index) => {
                  item.order = index;
              });
  
              // adding overflow wrapper for the icons if not exist
              if(navContextSelectorIconOverflowWrapper === null) {
                  const navContextSelectorIconsOverflowID = navID + 'IconsMenuDropContent';
  
                  navContextSelectorIconOverflowWrapper = createElement('li', ['dropdown', 'icon-dropdown', 'icon', 'hidden']);
                  navContextSelectorIconOverflowTrigger = createElement('a',['dropdown-toggle'], [{id: navContextSelectorIconsOverflowID}, {role: 'button'}, {href: '#!'}, {'data-toggle': 'dropdown'}, {'aria-haspopup': true}, {'aria-expanded': false}, {'aria-label': 'Open contextual overflow menu with more action options'}]);
                  navContextSelectorIconOverflowTriggerIcon = createElement('span',['vismaicon', 'vismaicon-dynamic', 'vismaicon-tools'], [{'aria-hidden': true}]);
                  navContextSelectorIconOverflowContent = createElement('ul', ['dropdown-menu'], [{role: 'menu'}, {'aria-expanded': false}, {'aria-hidden': true}, {'aria-labelledby': navContextSelectorIconsOverflowID}]);
  
                  navContextSelectorIconOverflowTrigger.appendChild(navContextSelectorIconOverflowTriggerIcon);
                  navContextSelectorIconOverflowWrapper.appendChild(navContextSelectorIconOverflowTrigger);
                  navContextSelectorIconOverflowWrapper.appendChild(navContextSelectorIconOverflowContent);
  
                  if (navUserDropdownWrapper !== null) navUserDropdownWrapper.before(navContextSelectorIconOverflowWrapper)
                  else navContextSelectorMenu.appendChild(navContextSelectorIconOverflowWrapper);
              }
          }
  
          // search navbar width, if exist
          if(navSearchWrapper !== null) navSearchWrapper.initwidth = navSearchWrapper.clientWidth;
  
          // initial width and is icon for user dropdow, if exist
          if (navUserDropdownWrapper !== null) {
              navUserDropdownWrapper.initwidth = navUserDropdownWrapper.clientWidth;
              navUserDropdownWrapper.initDropdownIsIcon = navUserDropdownisIcon;
          }
  
          // initial state if is icon for shopping card wrapper, and width if exist
          if (navShoppingCardWrapper !== null) {
              navShoppingCardWrapper.initDropdownIsIcon = navShoppingCardWrapper.classList.contains('icon');
              navShoppingCardWrapper.initwidth = navShoppingCardWrapper.clientWidth;
          }
  
  
          // ** isMobile() function
          // nav transform to mobile design
          function isMobile() {
              // return if already mobile design
              if (_isMobile === true) {
  
                  // update remaining space available
                  navFirstlvlWrapperWidth = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.clientWidth : 0;
                  navContextMenuWrapperWidth = (navContextSelectorMenu !== null) ? navContextSelectorMenu.clientWidth : 0;
                  restWidth = nav.clientWidth - navFirstlvlWrapperWidth - navContextMenuWrapperWidth;
  
                  //....
                  return;
              };
  
  
              // * add icon class
              // if user dropdown style isn't icon
              if ((navUserDropdownWrapper !== null) && !navUserDropdownisIcon) {
                  navUserDropdownWrapper.classList.add('icon');
                  navUserDropdownisIcon = true;
              }
              // if shopping card style isn't icon
              if((navShoppingCardWrapper !== null) && !navShoppingCardWrapper.initDropdownIsIcon) navShoppingCardWrapper.classList.add('icon');
              // reduce search field on normal state as icon
              // if((navSearchWrapper !== null) && !navSearchWrapper.classList.contains('icon')) navSearchWrapper.classList.add('icon');
              if((navSearchWrapper !== null) && !navSearchWrapper.classList.contains('navbar-form-shortened')) navSearchWrapper.classList.add('navbar-form-shortened');
  
              // update first level item list and overflow list
              overflowFirstlvlList = (overflowFirstlvlMenuDropContent !== null) ? overflowFirstlvlMenuDropContent.querySelectorAll(':scope > li:not(.navbar-brand)') : [];
              firstlvlChildren = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.querySelectorAll(':scope > li:not(.menudrop)') : [];
  
              // move all first level items under the overflow first level wrapper
              if (firstlvlChildren.length > 0) {
                  // if there are no first level items in the overflow
                  if (overflowFirstlvlList.length == 0) {
                      // move all under it
                      firstlvlChildren.forEach(item => overflowFirstlvlMenuDropContent.appendChild(item));
                  } else {
                      // else go one by one and move it
                      for(let i = firstlvlChildren.length; i > 0; i--) {
                          // if it have an active item in the first level
                          if (firstlvlChildren[i-1].classList.contains('active')) {
                              let isMoved = false;
                              // update the overflow list
                              overflowFirstlvlList = overflowFirstlvlMenuDropContent.querySelectorAll(':scope > li:not(.navbar-brand)');
                              // find the location for the active item
                              for (let j = 0; j < overflowFirstlvlList.length; j++) {
                                  if (overflowFirstlvlList[j].order > firstlvlChildren[i-1].order) {
                                      overflowFirstlvlList[j].before(firstlvlChildren[i-1]);
                                      isMoved = true;
                                      break;
                                  }
                              };
                              // if the location is after all current list item
                              if(!isMoved) overflowFirstlvlMenuDropContent.appendChild(firstlvlChildren[i-1]);
                          // for all other non active items
                          } else overflowFirstlvlDropdownAppListWrapper.after(firstlvlChildren[i-1]);
                      };
                  };
              };
  
              // move all app links from nav header wrapp to the first level overflow wrapper under the apps wrapp
              moveChildrenNode(navbarHeaderAppWrapper, overflowFirstlvlDropdownAppListWrapper);
              // make visible overflow wrapp
              overflowFirstlvlWrapper.classList.remove('hidden');
              // and the new apps wrapp
              overflowFirstlvlDropdownAppListWrapper.classList.remove('hidden');
              // overflowFirstlvlDropdownAppListWrapper.classList.add('is-open');
              // add class for overall mobile style
              nav.classList.add('is-mobile');
              // indicate is mobile syle for later reference
              _isMobile = true;
          }
          // ** End isMobile() function
  
  
          // ** resizeNav() function
          // responsive for width > 640px
          function resizeNav() {
              // isMobile();
              // return;
  
              // if initial is mobile
              if (_isMobile === true) {
                  // move all app links back to the navbar header wrapper
                  moveChildrenNode(overflowFirstlvlDropdownAppListWrapper, navbarHeaderAppWrapper);
                  // hide old apps wrapper from the first level overflow wrapp
                  overflowFirstlvlDropdownAppListWrapper.classList.add('hidden');
                  // 
                  if(overflowFirstlvlWrapper !== null) {
                      // find all items in overflow, except the brand apps wrapp
                      let _allFirstlvlOverflowItems = (overflowFirstlvlMenuDropContent !== null) ? overflowFirstlvlMenuDropContent.querySelectorAll(':scope > li:not(.navbar-brand)') : [];
                      // if items exist
                      if(_allFirstlvlOverflowItems.length > 0) {
                          let _ifFirstlvlActiveItem = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.querySelector(':scope > li.active:not(.menudrop)') : null;
                          for(let i = 0; i < _allFirstlvlOverflowItems.length; i++) {
                              if (_ifFirstlvlActiveItem !== null) {
                                  // if the itinial order of the active item is bigger then the one that need to be moved
                                  if(_ifFirstlvlActiveItem.order > _allFirstlvlOverflowItems[i].order) _ifFirstlvlActiveItem.before(_allFirstlvlOverflowItems[i])
                                  // else add before the first level overflow wrapp
                                  else overflowFirstlvlWrapper.before(_allFirstlvlOverflowItems[i]);
                              // if is no active item
                              } else overflowFirstlvlWrapper.before(_allFirstlvlOverflowItems[i]);
                          };
  
                          // hide the first level overflow dropdown menu after removing all items
                          overflowFirstlvlWrapper.classList.remove('open');
                          overflowFirstlvlWrapper.classList.add('hidden');
                          overflowFirstlvlMenuDropTrigger.ariaExpanded = false;
                          overflowFirstlvlMenuDropContent.ariaExpanded = false;
                          overflowFirstlvlMenuDropContent.ariaHidden = true;
                      };
                      // hide first level overflow wrapp if isn't open
                      if(!overflowFirstlvlWrapper.classList.contains('open')) {
                          overflowFirstlvlWrapper.classList.add('hidden');
                          overflowFirstlvlMenuDropTrigger.ariaExpanded = false;
                          overflowFirstlvlMenuDropContent.ariaExpanded = false;
                          overflowFirstlvlMenuDropContent.ariaHidden = true;
                      };
                  }
                  // remove overall mobile style
                  nav.classList.remove('is-mobile');
                  // remove the shortened and icon class
                  if(navSearchWrapper !== null) navSearchWrapper.classList.remove('icon', 'navbar-form-shortened');
                  // and reference variable.
                  _isMobile = false;
              };
  
              // update remaining space available
              brandWrapperWidth = (navbarHeader !== null) ? navbarHeader.clientWidth : 0;
              navFirstlvlWrapperWidth = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.clientWidth : 0;
              navContextMenuWrapperWidth = (navContextSelectorMenu !== null) ? navContextSelectorMenu.clientWidth : 0;
              // remaining space available
              restWidth = nav.clientWidth - brandWrapperWidth - navFirstlvlWrapperWidth - navContextMenuWrapperWidth;
  
  
  
              // if there is not enough space left
              if (restWidth < 0) {
                  // first transform user dropdown to icon if exit and is not already
                  if ((navUserDropdownisIcon !== null) && !navUserDropdownisIcon) {
                      // add first icon style for it
                      navUserDropdownWrapper.classList.add('icon');
                      navUserDropdownisIcon = true;
                      // update rest width with new user dropdown style
                      restWidth = restWidth + (navUserDropdownWrapper.initwidth - navUserDropdownWrapper.clientWidth);
                  };
  
                  // if there is not enough space left
                  // reduce width of the navbar search if exist or is not already shortened
                  if (restWidth < 0) {
                      // if search navbar is full lenght
                      if ((navSearchWrapper !==null) && !navSearchWrapper.classList.contains('navbar-form-shortened')) {
                          // add the shorened class
                          navSearchWrapper.classList.add('navbar-form-shortened');
                          // update rest width with new navbar search shorter width
                          restWidth = restWidth + (navSearchWrapper.initwidth - navSearchWrapper.clientWidth);
                      }
                  };
  
                  // if there is not enough space left
                  // reduce width of the shopping card dropdown if exist or is not already shortened
                  if (restWidth < 0) {
                      // if shopping card style isn't icon
                      if((navShoppingCardWrapper !== null) && !navShoppingCardWrapper.initDropdownIsIcon && !navShoppingCardWrapper.classList.contains('icon')) {
                          navShoppingCardWrapper.classList.add('icon');
                          // update rest width with new shopping card style width
                          restWidth = restWidth + (navShoppingCardWrapper.initwidth - navShoppingCardWrapper.clientWidth);
                      };
                  };
  
                  // if there is not enough space left
                  // go throughout all the first main level items, if exist, and remove them (add to overflow) one by one
                  if (restWidth < 0) {
                      // if exist the first level overflow wrapp and the first level item outside overflow wrapp
                      if (overflowFirstlvlWrapper !== null) {
                          let i = firstlvlChildren.length;
  
                          // if the first level overflow wrapp is hidden
                          if (overflowFirstlvlWrapper.classList.contains('hidden')) {
                              overflowFirstlvlWrapper.classList.remove('hidden');
                              // update remaining space with the width of the first level overflow trigger width
                              restWidth = restWidth - overflowFirstlvlWrapperWidth;
                          };
  
                          // go through all the first level items in reverse order if exist
                          while (i > 0) {
                              i--;
                              // if there is not enough space left
                              if (restWidth < 0) {
                                  // if it dosen't contain active class
                                  if (!firstlvlChildren[i].classList.contains('active')) {
                                      // update remaining space with current loop item
                                      restWidth = restWidth + firstlvlChildren[i].clientWidth;
                                      // and move it under the overflow wrapp
                                      overflowFirstlvlDropdownAppListWrapper.after(firstlvlChildren[i]);
                                  };
                              } else break;
                          };
                      };
                  };
  
                  // if is still not enough space left
                  // go through all icons items, if are more then 4, and remove them / add to an icon dropdown overflow
                  if (restWidth < 0) {
                      // if are more then 4 context menu icons
                      if(navContextSelectorIcons.length > 4) {
                          let j = navContextSelectorIcons.length;
  
                          // if the context selector icon o verflow wrapper is hidden
                          if (navContextSelectorIconOverflowWrapper.classList.contains('hidden')) {
                              navContextSelectorIconOverflowWrapper.classList.remove('hidden');
                              // update remaining space with the width of the context selector overflow menu icon trigger width
                              restWidth = restWidth - navContextSelectorIconOverflowWidth;
                          };
  
                          // go through all the context selector icons in reverse order if exist, and at least 1 icon remain outside the overflow wrapp
                          while (j > 1) {
                              j--;
                              // if there is not enough space left
                              if (restWidth < 0) {
                                  // update remaining space with current loop item
                                  restWidth = restWidth + navContextSelectorIcons[j].clientWidth;
                                  // and move it under the overflow wrapp as first child
                                  navContextSelectorIconOverflowContent.prepend(navContextSelectorIcons[j]);
                              } else break;
                          };
                      }
                  }
  
                  // if is still not enough space left
                  if (restWidth < 0) isMobile();
  
                  return;
              // if is some space avaible
              } else {
                  // update remaining space available
                  brandWrapperWidth = (navbarHeader !== null) ? navbarHeader.clientWidth : 0;
                  navFirstlvlWrapperWidth = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.clientWidth : 0;
                  navContextMenuWrapperWidth = (navContextSelectorMenu !== null) ? navContextSelectorMenu.clientWidth : 0;
                  // remaining space available
                  restWidth = nav.clientWidth - brandWrapperWidth - navFirstlvlWrapperWidth - navContextMenuWrapperWidth;
  
                  if((navContextSelectorIconOverflowContent !== null) && (navContextSelectorIconOverflowContent.childElementCount > 0)) {
                      // go through all the context selector icons from the overflow wrapper
                      for (let j = 0; j < navContextSelectorIconOverflowContent.childElementCount; j++) {
                          // temporar calculate the rest space including with of one icon
                          let _newSpace = restWidth - 56;
                          // if the temporary space is still above 0
                          if (_newSpace > 0) {
                              // update remaining space with the new calculated space
                              restWidth = _newSpace;
                              // move first child from the overflow wrapp
                              navContextSelectorIconOverflowWrapper.before(navContextSelectorIconOverflowContent.firstChild);
                              // there are less then 1 icon item in the overflow,
                              if (navContextSelectorIconOverflowContent.childElementCount < 2) {
                                  // move it outside
                                  navContextSelectorIconOverflowWrapper.before(navContextSelectorIconOverflowContent.firstChild);
                                  // and hide overflow icon wrapper
                                  navContextSelectorIconOverflowWrapper.classList.remove('open');
                                  navContextSelectorIconOverflowWrapper.classList.add('hidden');
                                  navContextSelectorIconOverflowTrigger.ariaExpanded = false;
                                  navContextSelectorIconOverflowContent.ariaExpanded = false;
                                  navContextSelectorIconOverflowContent.ariaHidden = true;
                              }
                          } else return;
                      };
                  }
  
                  // if is still enough space go thrue the overflow wrapp for first level items and add them back to the first level
                  if (restWidth > 0) {
                      // 
                      if(overflowFirstlvlWrapper !== null) {
                          // find all items in overflow, except the brand apps wrapp
                          let _firstlvlOverflowItems = (overflowFirstlvlMenuDropContent !== null) ? overflowFirstlvlMenuDropContent.querySelectorAll(':scope > li:not(.navbar-brand)') : [];
                          // if items exist
                          if(_firstlvlOverflowItems.length > 0) {
                              let _firstlvlActiveItem = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.querySelector(':scope > li.active:not(.menudrop)') : null;
  
                              for(let i = 0; i < _firstlvlOverflowItems.length; i++) {
                                  // temporar calculate the rest space including with of one icon
                                  let _tempSpace = restWidth - _firstlvlOverflowItems[i].initwidth;
  
                                  // if _firstlvlOverflowItems are less then 2
                                  if (_firstlvlOverflowItems.length < 2) {
                                      // update remaining space with width of the overflow button trigger
                                      _tempSpace = _tempSpace + overflowFirstlvlWrapperWidth;
  
                                      // if the temporary space is still above 0
                                      if (_tempSpace > 0) {
                                          // update remaining space with the new calculated space
                                          restWidth = _tempSpace;
                                          // if exist an first level active element outside the overflow wrapp
                                          if (_firstlvlActiveItem !== null) {
                                              // if the itinial order of the active item is bigger then the one that need to be moved
                                              if(_firstlvlActiveItem.order > _firstlvlOverflowItems[i].order) _firstlvlActiveItem.before(_firstlvlOverflowItems[i])
                                              // else add before the first level overflow wrapp
                                              else overflowFirstlvlWrapper.before(_firstlvlOverflowItems[i]);
                                          // if is no active item (by a bug or fluke accident)
                                          // NOTE: redo to include a controll error function
                                          } else overflowFirstlvlWrapper.before(_firstlvlOverflowItems[i]);
  
                                          // hide the first level overflow dropdown menu after removing all items
                                          overflowFirstlvlWrapper.classList.remove('open');
                                          overflowFirstlvlWrapper.classList.add('hidden');
                                          overflowFirstlvlMenuDropTrigger.ariaExpanded = false;
                                          overflowFirstlvlMenuDropContent.ariaExpanded = false;
                                          overflowFirstlvlMenuDropContent.ariaHidden = true;
                                      }
                                  } else {
                                      // if the temporary space is still above 0
                                      if (_tempSpace > 0) {
                                          // update remaining space with the new calculated space
                                          restWidth = _tempSpace;
                                          // if exist an first level active element outside the overflow wrapp
                                          if (_firstlvlActiveItem !== null) {
                                              // if the itinial order of the active item is bigger then the one that need to be moved
                                              if(_firstlvlActiveItem.order > _firstlvlOverflowItems[i].order) _firstlvlActiveItem.before(_firstlvlOverflowItems[i])
                                              // else add before the first level overflow wrapp
                                              else overflowFirstlvlWrapper.before(_firstlvlOverflowItems[i]);
                                          // if is no active item (by a bug or fluke accident)
                                          // NOTE: redo to include a controll error function
                                          } else overflowFirstlvlWrapper.before(_firstlvlOverflowItems[i]);
                                      } else return;
                                  }
                              }
                          }
                      }
                  };
  
                  // if is still enough space and the navbar search exist
                  if ((restWidth > 0) && (navSearchWrapper !== null)) {
                      let _tempWidth = restWidth - (navSearchWrapper.initwidth - navSearchWrapper.clientWidth);
  
                      // if the temporary space is still above 0
                      if ((_tempWidth > 0) && navSearchWrapper.classList.contains('navbar-form-shortened')) {
                          // update remaining space with the new calculated space
                          restWidth = _tempWidth;
                          // remove the shortened class
                          navSearchWrapper.classList.remove('navbar-form-shortened');
                      }
                  };
  
                  // if there is not enough space left
                  // reduce width of the shopping card dropdown if exist or is not already shortened
                  if (restWidth > 0) {
                      // if shopping card initial style isn't icon, remove icon
                      if((navShoppingCardWrapper !== null) && !navShoppingCardWrapper.initDropdownIsIcon) {
                          let _newtempWidth = restWidth - (navShoppingCardWrapper.initwidth - navShoppingCardWrapper.clientWidth);
                          if (_newtempWidth > 0) {
                              navShoppingCardWrapper.classList.remove('icon');
                              // update rest width with new shopping card style width
                              restWidth = _newtempWidth;
                          }
                      };
                  };
  
                  // if is still enough space and the navbar search exist
                  if ((restWidth > 0) && (navUserDropdownWrapper !== null) && navUserDropdownisIcon) {
                      let _restSpace = restWidth - (navUserDropdownWrapper.initwidth - 60);
  
                      // if user dropdown style have icon
                      if (_restSpace > 0) {
                          restWidth = _restSpace;
                          navUserDropdownWrapper.classList.remove('icon');
                          navUserDropdownisIcon = false;
                      }
                  };
              };
          }
          // ** End resizeNav() function
  
  
          // ** responsive update when resize window
          window.addEventListener('resize', () => {
              windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
  
              // overall main nav width (how much space it can have available).
              navWrapperWidth = nav.clientWidth;
              // if exist, the first level wrapper width, otherwise set the value to 0
              navFirstlvlWrapperWidth = (navFirstlvlWrapper !== null) ? navFirstlvlWrapper.clientWidth : 0;
              // if exist, the contextual menu (right nav bar menu) wrapper width, otherwise set the value to 0
              navContextMenuWrapperWidth = (navContextSelectorMenu !== null) ? navContextSelectorMenu.clientWidth : 0;
                  // remaining space available
                  restWidth = navWrapperWidth - brandWrapperWidth - navFirstlvlWrapperWidth - navContextMenuWrapperWidth;
  
              // if window/device width is less then mobile break point (640px)
              // mobile style
              if (windowWidth < 641) isMobile()
              else {
                  // if the avaible space for main nav is less then mobile break point
                  if (navWrapperWidth < 641) isMobile()
                  // else normal check for resize
                  else resizeNav();
              };
          });
          // ** End resize window
  
  
          // ** init propper responsive update
          // if windows is less then 641px init mobile design
          if (windowWidth < 641) isMobile()
          else {
              // if the avaible space for main nav is less then mobile break point
              if (navWrapperWidth < 641) isMobile()
              // else normal check for resize
              else resizeNav();
          };
          // ** End init
  
          // prevent clossing overflow dropdown menu when clicked on submenu dropdown triggers
          if(overflowFirstlvlMenuDropContent !== null) {
              overflowFirstlvlMenuDropContent.addEventListener('click', (e) => {
                  let _this = e.target;
                  let _allDropdown = overflowFirstlvlMenuDropContent.querySelectorAll('.dropdown-toggle, .nav-item.has-children');
  
                  _allDropdown.forEach(btn => {
                      if(_this === btn) {
                          e.stopPropagation();
                          let _parent = btn.parentElement;
                          let _dropdownMenu = _parent.querySelector('.dropdown-menu');
                          let _sibblings = [];
  
                          if(_parent.classList.contains('navbar-brand')) {
                              _sibblings = _parent.parentElement.querySelectorAll(':scope > li:not(.navbar-brand)');
                          }
  
                          _parent.classList.toggle('is-open');
                          _parent.classList.toggle('open');
  
                          if(_parent.classList.contains('is-open')) {
                              btn.ariaExpanded = true;
                              _dropdownMenu.ariaExpanded = true;
                              _dropdownMenu.ariaHidden = false;
  
                              if(_sibblings.length > 0) _sibblings.forEach( item => item.classList.add('hidden'));
                          } else {
                              btn.ariaExpanded = false;
                              _dropdownMenu.ariaExpanded = false;
                              _dropdownMenu.ariaHidden = true;
  
                              if(_sibblings.length > 0) _sibblings.forEach( item => item.classList.remove('hidden'));
                          }
                      }
                  });
              });
          }
  
      });
      // End Main Navigation responsive functionality
      // *** --- ***
  
  
  
  
  
  
  
  
  
  
      //
      function addThemeModeToggle () {
        // Select the switch
        const btn = document.querySelector(".light-dark-toggle > input");
        // Check for dark mode preference at the OS level
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        // Get the user's theme preference from local storage, if it's available
        const currentTheme = localStorage.getItem("theme");
        // html tag
        const _html = document.body.parentNode;
    
        // If the user's preference in localStorage is dark
        if (currentTheme == "dark") {
          // adding .dark-theme class on the body
          _html.classList.add("dark-theme");
          btn.checked = true;
    
        // Otherwise, if the currentTheme is light mode.
        } else if (currentTheme == "light") {
          // adding .dark-theme class on the body
          _html.classList.add("light-theme");
          btn.checked = false;
    
        // Otherwise adding the correct toggle state
        } else {
          btn.checked = prefersDarkScheme.matches;
        }
    
        // Listen for a click on the button 
        prefersDarkScheme.addEventListener("change", function(e) {
          if ((currentTheme == "light") && e.matches) {
            var theme = "dark";
            // remove the light mode class and adding the dark mode class
            _html.classList.remove("light-theme");
            _html.classList.add("dark-theme");
            btn.checked = true;
    
          } else if ((currentTheme == "dark") && !e.matches) {
            var theme = "light";
            // remove the dark mode class
            _html.classList.remove("dark-theme");
            btn.checked = false;
    
          } else {
            var theme = e.matches ? "dark" : "light";
            _html.classList.remove("light-theme");
            _html.classList.remove("dark-theme");
            // adding the correct toggle state
            btn.checked = prefersDarkScheme.matches ? true : false;
          }
    
          // Save the current preference to localStorage
          localStorage.setItem("theme", theme);
        });
    
        // Listen for a change in theme mode at the OS level
        btn.addEventListener("click", function() {
          // If the user's OS setting is on dark theme/mode
          if (prefersDarkScheme.matches) {
            // toggle the light mode class
            _html.classList.toggle("light-theme");
            var theme = _html.classList.contains("light-theme") ? "light" : "dark";
            // .dark-theme used if the .light-theme class is already on the body
            _html.className = _html.classList.contains("light-theme") ? "light-theme" : "dark-theme";
            btn.checked = _html.classList.contains("light-theme") ? false : true;
    
          // If the user's OS setting is on light theme/mode
          } else {
            _html.classList.toggle("dark-theme");
            var theme = _html.classList.contains("dark-theme") ? "dark" : "light";
            // .light-theme used if the .dark-theme class is already on the body
            _html.className = _html.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
            btn.checked = _html.classList.contains("dark-theme") ? true : false;
          }
    
          // Save the current preference to localStorage
          localStorage.setItem("theme", theme);
        });
      };
 
      //remCookies.addEventListener("click", function(){
        // if (localStorage.getItem("theme") !== null) localStorage.removeItem("theme");
       // if (localStorage.getItem("currentCookie") !== null) localStorage.removeItem("currentCookie");
      //});
    
        addThemeModeToggle();
    };
    
    // load/call 'mainFunction' after document is loaded
    document.addEventListener('DOMContentLoaded', mainFunction);