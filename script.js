let celsius=document.getElementById("celsius");
let farenheit=document.getElementById("farenheit");
let kelvin=document.getElementById("kelvin");

celsius.oninput=function(){
  let f=parseFloat(celsius.value);
  f=(f*9/5)+32;
  farenheit.value=f.toFixed(2);
  let k=parseFloat(celsius.value);
  k=k+273.15;
  kelvin.value=k.toFixed(2);
}

kelvin.oninput=function()
{
  let f=parseFloat(kelvin.value);
  f=(f-273.15)*(9/5)+32;
  farenheit.value=f.toFixed(2);
  let c=parseFloat(kelvin.value);
  c=c-273.15;
  celsius.value=c.toFixed(2);
}

farenheit.oninput=function()
{
  let c=parseFloat(farenheit.value);
  c=(5/9)*(c-32);
  celsius.value=c.toFixed(2);
  let k=parseFloat(farenheit.value);
  k=(5/9)*(k-32)+273.15;
 kelvin.value=k.toFixed(2); 
}