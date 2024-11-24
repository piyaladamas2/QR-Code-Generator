const inputData= document.querySelector("#qrInput");
const inputBtn= document.querySelector("#qrButton");
const inputImage= document.querySelector("#qrImage");


inputBtn.addEventListener('click',()=>{
      const inputValue= inputData.value;

      if( !inputValue){
            alert("Please Enter URL")
            return;
      }else{
            inputImage.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
            inputImage.alt=`QR code for ${inputValue}`
      }
})