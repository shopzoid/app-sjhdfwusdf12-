// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCORThhpBzHN6_4Z1U-4kI__A6xf5fRuzA",
  authDomain: "shopzoid-app.firebaseapp.com",
  databaseURL: "https://shopzoid-app-default-rtdb.firebaseio.com",
  projectId: "shopzoid-app",
  storageBucket: "shopzoid-app.appspot.com",
  messagingSenderId: "124724344551",
  appId: "1:124724344551:web:7be967100ee7a075469442",
  measurementId: "G-XFNSKZGLNM",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Halaman Link');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  alert("Produk Telah Terkirim Tunggu 1-2 Hari");

  // Get values
  var username = getInputVal('username');
  var email = getInputVal('email');
  var instagram = getInputVal('instagram');
  var facebook = getInputVal('facebook');

  // Save message
  saveMessage(username, email, instagram, facebook);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(username, email, instagram, facebook) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    username: username,
    email: email,
    instagram: instagram,
    facebook: facebook,
  });
}