  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCD8yPFikYEIlhFKTT-hHbKDIClVoN1MGk",
    authDomain: "mycloudproject-fde07.firebaseapp.com",
    databaseURL: "https://mycloudproject-fde07.firebaseio.com",
    projectId: "mycloudproject-fde07",
    storageBucket: "mycloudproject-fde07.appspot.com",
    messagingSenderId: "985698534317",
    appId: "1:985698534317:web:03a19dae2a215212e79724",
    measurementId: "G-X9P5FLQE40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}

