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

