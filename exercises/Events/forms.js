const wes = document.querySelector('.wes');

wes.addEventListener('click', function (event) {
  console.log('you clicked this link');
  //shouldChangePage will give you true if you click okay and false if you click cancel
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
  event.preventDefault();
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    if(name.includes('wes')){
        alert('Sorry bro!');
        event.preventDefault();
    }
});

//other events with form inputs include keyup, keydown, focus, blur

function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

//Accessibility - in HTML to click enter on the photo only using tab and without using the
//mouse you need to add the attribute tabindex="0"
function handlePhotoClick(event){
    console.log('You clicked the photo');
    console.log(event.key);
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

