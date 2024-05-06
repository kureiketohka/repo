

function check1(){
   const Answer1 = document.getElementById("answer1");

   if (Answer1.value == 'クリームソーダ') {
   document.getElementById("result1").innerText =''
   document.getElementById("next1").setAttribute("open","open");
   } else {
   result1.innerText = '「そう来たかぁ...ちょっと'+Answer1.value+'の気分じゃないかなぁ」';
   }

}

function check2(){
   const Answer2 = document.getElementById("answer2");

   if (Answer2.value == 'サンドイッチ') {
   document.getElementById("result2").innerText =''
   document.getElementById("next2").setAttribute("open","open");
   } else {
   result2.innerText = '「'+Answer2.value+'ねぇ...キミ、はじめて？」';
   }

}

function check3(){
   const Answer3 = document.getElementById("answer3");

   if (Answer3.value == 'いつもの') {
   document.getElementById("result3").innerText =''
   document.getElementById("next3").setAttribute("open","open");
   } else if (Answer3.value == 'ワッフル'){
   document.getElementById("result4").innerText =''
   document.getElementById("next4").setAttribute("open","open");
   } 
   else {
   result3.innerText = '「'+Answer3.value+'は嫌いじゃないよ。ごめんね難しかったかな？」';
   }

}

function view(){
   const medium = document.getElementById("medium");

   let img = document.getElementById("medium_view");
   img.src = medium.value+".png";
   

}





  