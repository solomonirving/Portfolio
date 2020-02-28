
const menuIcon = $('.bars');
const sideNav = $('.side-nav');
const sideNavClose = $('.menu-close');

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Open the side nav on click
menuIcon.on('click', function() {
  toggleClassName(sideNav, 'active');
});

// Close the side nav on click
sideNavClose.on('click', function() {
  toggleClassName(sideNav, 'active');
});