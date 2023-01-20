const navigationHeight = document.querySelector('.primary-navigation').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding',navigationHeight -1 + 'px');