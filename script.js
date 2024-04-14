document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.querySelector('input[name="email"]').value;
    // You can add your logic here, like sending the email to a server or displaying a thank you message
    alert("Thank you for signing up with email: " + email);
  });
  

//  // Get the image container
// const imageContainer = document.querySelector('.image-container');

// // Get the height of the features section
// const featuresSectionHeight = document.querySelector('.features').offsetHeight;

// // Add scroll event listener to the window
// window.addEventListener('scroll', function() {
//   // Calculate the top position where the image container should stick
//   const stickyPosition = featuresSectionHeight * 0.3; // Adjust this value as needed
  
//   // Calculate the top position of the image container
//   const topPosition = window.scrollY + stickyPosition;

//   // Update the top position of the image container
//   imageContainer.style.top = topPosition + 'px';
// });

