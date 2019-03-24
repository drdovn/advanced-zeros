module.exports = function getZerosCount(number, base) {
  let two=0,three=0,five=0,seven=0;
  let zero=0,zero2=0,zero3=0,zero5=0,zero7=0, zerob=0;
for(let i=0;;i++){
       if(base%2==0){  base1=base/2;  two++;}
  else if(base%3==0){  base1=base/3;  three++;}
  else if(base%5==0){  base1=base/5;  five++;}
  else if(base%7==0){  base1=base/7;  seven++;}
  else{
    break;
  }
  base=base1;
}
  if(two!=0){let sum=0;
    for(let i=1;(Math.pow(2, i))<number;i++){
        sum=sum+(Math.floor(number/Math.pow(2,i)));
      }
      zero2=Math.floor(sum/two);
  }
  if(three!=0){let sum=0;
    for(let i=1;(Math.pow(3, i))<number;i++){
        sum=sum+(Math.floor(number/Math.pow(3,i)));
      }
      zero3=Math.floor(sum/three);
  }
  if(five!=0){let sum=0;
    for(let i=1;(Math.pow(5, i))<number;i++){
        sum=sum+(Math.floor(number/Math.pow(5,i)));
      }
      zero5=Math.floor(sum/five);
  }
  if(seven!=0){let sum=0;
    for(let i=1;(Math.pow(7, i))<number;i++){
      sum=sum+(Math.floor(number/Math.pow(7,i)));
    }
    zero7=Math.floor(sum/seven);
  }
  if((base>1)&&((Math.ceil(Math.sqrt(base))-Math.sqrt(base))>0)){
    let sum=0;
    for(let i=1;(Math.pow(base, i))<number;i++){
      sum=sum+(Math.floor(number/Math.pow(base,i)))
    }
    zerob=sum;
  }else if(base>1){
    let sum=0;
    base=Math.sqrt(base)
    for(let i=1;(Math.pow(base, i))<number;i++){
      sum=sum+(Math.floor(number/Math.pow(base,i)))
    }
    zerob=Math.floor(sum/2);
  }
  arr=[zerob,zero2,zero3,zero5,zero7];
  for(i=0;i<5;i++){if(arr[i]!=0){sum=arr[i]}}
  for(i=0;i<5;i++){
    if((sum>=arr[i])&&(arr[i]!=0)){
      sum=arr[i];
      zero=arr[i];
    }
  }
  return zero;
}
