let btn = document.getElementById('transition');
let firstDropDown = document.getElementById('change-A');
let secondDropDown = document.getElementById('change-B');
let status = document.getElementById('error');

let result = document.getElementById('changing');

btn.addEventListener('click', function() {
  status.innerHTML = '';
  result.style = ''
  if (firstDropDown.value === '' && secondDropDown.value === '') {
    status.innerHTML = 'No option selected'
    status.innerHTML = '';
    result.style = ''
  }
  // console.log(firstDropDown.value)
  //first transition
  switch (firstDropDown.value) {
    case 'color':
      result.style.color = 'black';
      break;
    case "background":
      result.style.background = 'black';
      break;
    case 'font-style':
      result.style.fontStyle = "oblique"
      break;
    case 'font-weight':
      result.style.fontWeight = "600"
      break;
  }

  //second transitions
  setTimeout(function(){
    switch (secondDropDown.value) {
      case 'color':
        result.style.color = 'white';
        break;
      case "background":
        result.style.background = 'grey';
        break;
      case 'font-style':
        result.style.fontStyle = "italic"
        break;
      case 'font-weight':
        result.style.fontWeight = "200"
        break;
    };
  }, 300);

})

// 1. Add an event listener to the button on click
// 2. If either select box does not have an option selected, surface an error
// 3. When you click the button, make a change to the changing element
//   (a) If 'Color' is selected, change the color of the text
//   (b) If 'Background Color' is selected, change the background-color
//   (c) If 'Font Style' is selected, change the font-style
//   (d) If 'Font Weight' is selected, change the font-weight
// 4. Run the transitions in order. Make sure to nest the timeouts!
// 5. When you click the "Go!" button again, it should clear out the styles first before transition to new styles.
