export function toggleDisabled() {
  return {
    type: 'TOGGLE_DISABLED'
  };
}

export function gotoPage(page) {
  return {
    type: 'GOTO_PAGE',
	page: page
  };
}

export function contextMenuOpen(params) {
  return {
    type: 'CONTEXT_MENU_OPEN',
	params: params
  };
}

export function contextMenuClose() {
  return {
    type: 'CONTEXT_MENU_CLOSE'
  };
}

export function updateScroll(params) {
  return {
    type: 'CONTEXT_MENU_UPDATE_SCROLL',
	params: params
  };
}
