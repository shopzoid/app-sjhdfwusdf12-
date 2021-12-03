// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCORThhpBzHN6_4Z1U-4kI__A6xf5fRuzA",
  authDomain: "shopzoid-app.firebaseapp.com",
  databaseURL: "https://shopzoid-app-default-rtdb.firebaseio.com",
  projectId: "shopzoid-app",
  storageBucket: "shopzoid-app.appspot.com",
  messagingSenderId: "124724344551",
  appId: "1:124724344551:web:7be967100ee7a075469442",
  measurementId: "G-XFNSKZGLNM"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('kategori');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  alert("Produk Telah Terkirim Tunggu 1-2 Hari");

  // Get values
  var tokomu = getInputVal ('tokomu')
  var name = getInputVal('name');
  var tipe = getInputVal('tipe');
  var link = getInputVal('link');

  // Save message
  saveMessage(name, tipe, link, tokomu);

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
function saveMessage(name, tipe, link, tokomu) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    tokomu: tokomu,
    name: name,
    tipe: tipe,
    link: link,
  });
}