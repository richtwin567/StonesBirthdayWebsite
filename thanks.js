//Implementation of the messages
let messages = {
  mJames: `Happy Birthay Stone!🥳🥳 
<br>Thanks for being a constant inspiration and for always helping us as first years.
<br>Really appreciate all the hard work you put in and hope to one day be a better coder than you.
<br>Gamejam was all the more fun with your help. Hope we can do that again.
<br>Stay safe on your birthday and remember to sanitize.
<br> -Marlon James`,
  jForrest:`Happy Birthday Dr. Stone!!! <br>
I am honestly grateful that you've constantly taken the time out to spare your time and assist us first years. 
<br>You truly deserve an award for your efforts. 
<br>We appreciate your help and dedication and wish you a happy Corona free birthday XD. 
<br>-Jevon Forrest`,
  dMullings:`Happy birthday Stone! We students have greatly appreciated your assistance from semester one straight through to now.
<br>Your ability to instantaneously understand and teach computer science is unparalleled. 
<br>Thank you for always being willing to assist, take initiative and have our best interest and heart. 
<br>I hope you enjoy the day and sanitize! <br> -Danielle Mullings`,
  aRichards:`Happy Birthday, Stonegod!! Much love from your gamejam peeps. Have a good one and I pray for many more!<br>-Anakai Richards`,
  jGayle:`I just want to say
<br>Happy Birthday Mathew 🥳🥳 
<br>You've been a really inspiring and helpful individual, especially when it comes onto content relating to AI and Machine Learning
<br>I really hope that you'll be able to enjoy your birthday to the fullest
  <br>-Jason Gayle`,
  mPalmer:`Bless up Stone God, you da real one. Hope you have a wonderful day today <br> -Matthew Palmer`,
  tBrown:`Appreciate the hard work <br>-Tadave Brown a.k.a Fruta`,
  nBenjamin: `Happy Birthday!! <br> I don't know where you got all the patience you have from, but I'm sure we are all pretty thankful for it.
<br>I hope you have the best day ever and many more KLOCs to come!!`
};

function birthdayMessage(pName){
  let personalMessage = document.getElementById('personalMessage');
  let divBody = document.getElementById('divBody');
  let backBtn = document.getElementById('backBtn');
  let quote = document.createElement("BLOCKQUOTE");
  
  quote.innerHTML=messages[pName];
  divBody.style.opacity=0;
  divBody.style.display = 'none';
  personalMessage.appendChild(quote);
  personalMessage.style.display = 'block';
  backBtn.style.display = 'block';
  
}

var names = document.getElementsByTagName("A");
for (var x=0;x<names.length;x++){
 names[x].onclick = function(){
   birthdayMessage(this.id);
 }
}

document.getElementById("backBtn").onclick= function (){
  let personalMessage = document.getElementById('personalMessage');
  let divBody = document.getElementById('divBody');
  
  divBody.style.opacity=1;
  divBody.style.display = 'block';
  personalMessage.innerHTML = "";
  personalMessage.style.display = 'none';
  this.style.display = 'none';
  
}