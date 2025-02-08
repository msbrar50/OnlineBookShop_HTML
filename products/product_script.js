const quantityBtns = document.querySelectorAll('.quantity-btn');
const quantityInput = document.querySelector('.quantity-input');

quantityBtns.forEach(btn => {
  btn.addEventListener('click', handleQuantityChange);
  btn.addEventListener('mouseover', handleHover);
  btn.addEventListener('mouseout', handleHoverOut);
});

function handleQuantityChange(event) {
  const btn = event.target;
  const input = quantityInput;
  const currentValue = parseInt(input.value);

  if (btn.classList.contains('decrease')) {
    input.value = Math.max(currentValue - 1, 1);
  } else if (btn.classList.contains('increase')) {
    input.value = currentValue + 1;
  }
}

function handleHover(event) {
  event.target.classList.add('hover');
}

function handleHoverOut(event) {
  event.target.classList.remove('hover');
}


// tabs work
const tabList = document.querySelector('.tab-list');
const tabPanes = document.querySelectorAll('.tab-pane');

tabList.addEventListener('click', (event) => {
  // Check if clicked element is a link within a tab list item
  if (event.target.tagName === 'A' && event.target.parentNode.classList.contains('tab-item')) {
    event.preventDefault(); // Prevent default link behavior (scrolling)

    const clickedTab = event.target.parentNode;

    // Remove active classes from all tabs and content panes
    tabList.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // Add active class to clicked tab and its corresponding content pane
    clickedTab.classList.add('active');
    document.querySelector(clickedTab.querySelector('a').getAttribute('href')).classList.add('active');
  }
});



const image = document.querySelector('.pd-image img');
const imagetext = document.querySelector('.image-text');
const imageContainer = document.querySelector('.pd-image');

image.addEventListener('click', () => {
  // Create a new fullscreen element
  const fullscreen = document.createElement('div');
  fullscreen.classList.add('fullscreen');

  // Clone the image and add it to the fullscreen element
  const fullscreenImage = image.cloneNode(true);
  fullscreen.appendChild(fullscreenImage);

  // Add a click event listener to the fullscreen element to close it
  fullscreen.addEventListener('click', () => {
    document.body.removeChild(fullscreen);
  });

  // Append the fullscreen element to the body
  document.body.appendChild(fullscreen);
});


imagetext.addEventListener('click', () => {     
  // Create a new fullscreen element
  const fullscreen = document.createElement('div');
  fullscreen.classList.add('fullscreen');

  // Clone the image and add it to the fullscreen element
  const fullscreenImage = image.cloneNode(true);
  fullscreen.appendChild(fullscreenImage);

  // Add a click event listener to the fullscreen element to close it
  fullscreen.addEventListener('click', () => {
    document.body.removeChild(fullscreen);
  });

  // Append the fullscreen element to the body
  document.body.appendChild(fullscreen);
});


