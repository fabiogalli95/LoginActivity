var app_fireBase = {};
(function(){
 
  var firebaseConfig = {
    apiKey: "AIzaSyBZP8W6Nr_ybTFxvp8Grc5Ws29FNrED-0M",
    authDomain: "login-77db0.firebaseapp.com",
    databaseURL: "https://login-77db0.firebaseio.com",
    projectId: "login-77db0",
    storageBucket: "login-77db0.appspot.com",
    messagingSenderId: "863754220825",
    appId: "1:863754220825:web:ee128492de77b7e6200188"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;
})();