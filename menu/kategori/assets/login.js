// Your web app's Firebase configuration (ENTER YOUR FIREBASE CONFIGURATION DETAILS)
var firebaseConfig = {
    apiKey: "AIzaSyCORThhpBzHN6_4Z1U-4kI__A6xf5fRuzA",
    authDomain: "shopzoid-app.firebaseapp.com",
    databaseURL: "https://shopzoid-app-default-rtdb.firebaseio.com",
    projectId: "shopzoid-app",
    storageBucket: "shopzoid-app.appspot.com",
    messagingSenderId: "124724344551",
    appId: "1:124724344551:web:7be967100ee7a075469442",
    measurementId: "G-XFNSKZGLNM",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var form = document.querySelector('#loginForm');
    var r_form = document.querySelector('#registerForm');
    var reset_form = document.querySelector('#resetForm');
    var message = document.querySelector('#messageDiv');
    var message_value = document.querySelector('.message');
    var sign_out = document.querySelector("#signOut");
    
    // check if user is logged in or not
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if(window.location.pathname != '/profile.html'){
                window.location = 'profile.html';
            }
        } else {
            if(window.location.pathname === '/profile.html'){
                window.location = 'index.html';
            }
        }
    });
    
    // user login
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = form.email.value;
            let password = form.password.value;
        
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location = 'profile.html';
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function(){
                    message.style.display = 'none';
                }, 3000);
            });
        })
    }
    
    // user register
    if(r_form){
        r_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = r_form.email.value;
            let password = r_form.password.value;
        
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.location = 'profile.html';
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function(){
                    message.style.display = 'none';
                }, 3000);
            });
        })
    }
    
    // password reset 
    if(reset_form){
        reset_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = reset_form.email.value;
        
            firebase.auth().sendPasswordResetEmail(email)
            .then((userCredential) => {
                message.style.display = 'block';
                message_value.innerText = 'Email has been send!';
                
            })
            .catch((error) => {
                message.style.display = 'block';
                message_value.innerText = error.message;
                setTimeout(function(){
                    message.style.display = 'none';
                }, 3000);
            });
        })
    }
    
    var provider = new firebase.auth.GoogleAuthProvider();
    var login = document.querySelector('.login');
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // console.log(user);
        window.location = 'profile.html';
      }
    });
    
    login.addEventListener('click', (e) => {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          window.location = 'profile.html'
        }).catch((error) => {
          console.log(error);
        });
    })
    
    // sign out  
    if(sign_out){
        sign_out.addEventListener('click', function(e) {
            firebase.auth().signOut().then(() => {
                window.location = 'index.html';
            }).catch((error) => {
            // An error happened.
            });
        })
    }