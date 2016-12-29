export function clickButton() {
  return {
    type: 'CLICK_BUTTON'
  };
}

export function clickExperiment() {
  return {
    type: 'CLICK_EXPERIMENT'
  };
}

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

