'use strict';

document.addEventListener('keydown', function (event) {
	const el = event.target;
	if (el && el.id === 'message' &&
		(event.key === 'Escape' || (event.ctrlKey && event.key === 'm'))) {
		event.stopPropagation();
	}
}, true);
