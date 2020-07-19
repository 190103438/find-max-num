function testjs(){
  const nums = document.getElementById("inp").value;
  const arr = nums.split(" ");
  let max = 0;
  for(let i = 0; i < arr.length;i++){
    if(Number(arr[i]) > max){
      max = Number(arr[i]);
    }
  }
  if(document.getElementById("text-input").value == max){
    document.querySelector(".show").innerText = 'True';
  }else{
    document.querySelector(".show").innerText = 'False';
  }
  let res = [];
  for(let i = 0 ; i < arr.length;i++){
    res.push(Number(arr[i]));
  }
  res.sort((a, b) => a - b);
  document.getElementById("sorted").value = res;
}