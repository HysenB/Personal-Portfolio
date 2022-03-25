const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
});


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal);
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 70}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


// const form = document.getElementById('modal-form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');

// // Show input error message
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control error';
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

// // Show success outline
// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// // Check email is valid
// function checkEmail(input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Email is not valid');
//   }
// }

// // Check required fields
// function checkRequired(inputArr) {
//   inputArr.forEach(function(input) {
//     if (input.value.trim() === '') {
//       showError(input, `${getFieldName(input)} is required`);
//     } else {
//       showSuccess(input);
//     }
//   });
// }

// // Check input length
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getFieldName(input)} must be at least ${min} characters`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFieldName(input)} must be less than ${max} characters`
//     );
//   } else {
//     showSuccess(input);
//   }
// }

// // Get fieldname
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // Event listeners
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   checkRequired([name, email, message]);
//   checkLength(name, 3, 15);
//   checkLength(message, 10, 200);
//   checkEmail(email);
// });
