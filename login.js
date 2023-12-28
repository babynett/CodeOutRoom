function login(){
  var txt_code = document.getElementById("num").value;
  var txt_pass = document.getElementById("pass").value;
  if(txt_code == "1000" && txt_pass == "pennywisekills"){
      alert('YOU DID IT! Click OK to continue')
      window.location.assign("codeout_main.html")
  }else if(txt_code == "0001" && txt_pass == "killspenny"){
      alert("You're putting the wrong answers!");
  }else if(txt_code == "" && txt_pass == ""){
      alert("Try to write something!");
  }else(
      window.location.assign('jumpscare.html')
  )
  return;
}