//temp converter
const textbox=document.getElementById("textbox");
const FToC= document.getElementById("FToC");
const CToF= document.getElementById("CToF");
const result=document.getElementById("result");
let temp;
function Convert(){
    if(FToC.checked){
        temp=Number(textbox.value)
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°C"
    }
    else if(CToF.checked){
        temp=Number(textbox.value)
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"°F"
    }
    else{
        result.textContent="Select a unit"
    }
}
