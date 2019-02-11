const girdi = document.querySelector('.control');
const list =document.querySelector('.list');
const body =document.querySelector('.game');
const myinput = document.querySelector('#input');
const btn = document.getElementById("buton");
btn.style.display = "none"
let cevap;
let cevapHakki=3;
const rastgeleSayi=Math.floor(Math.random()*10+1);

console.log(rastgeleSayi);
    function sayial(e) {
        var cevap = e.target.value;
            cevapHakki--;
            console.log(cevapHakki);
            console.log(cevap);
            if( cevap == rastgeleSayi){
                demo.innerHTML="Kazandinn";
              setTimeout( () =>{
                  demo.innerHTML="";
              },3000);
              input.style.display="none";
              btn.style.display = "block"
              btn.addEventListener('click',refresh);
            }
            else if(cevap < rastgeleSayi && cevapHakki > 0 ){
                demo.innerHTML = "Daha büyük sayi giriniz.."
                setTimeout( () =>{
                    demo.innerHTML="";
                },1000);
                myinput.value="";
            }
            else if( cevap > rastgeleSayi && cevapHakki > 0){
                    demo.innerHTML = "Daha küçük sayi giriniz.."
                    setTimeout( () =>{
                        demo.innerHTML="";
                    },1000);
                    myinput.value="";
                }
            else if( cevapHakki === 0){
                    demo.innerHTML=`Kaybettin..  Cevap ${rastgeleSayi}`;
                    setTimeout( () =>{
                        demo.innerHTML="";
                    },3000); 
                  input.style.display="none";
                  btn.style.display = "block"
                  btn.addEventListener('click',refresh);
                }
            };
        
    function refresh(){
        location.reload();
    }
 myinput.addEventListener('keyup',sayial);
 myinput.addEventListener('change',sayial);