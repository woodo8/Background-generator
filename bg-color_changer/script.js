const body = document.querySelector("body");
const inp = document.querySelector("input");
const submit = document.querySelector("#clickMe");
const rBtn = document.querySelector("#randBtn");
const colorCode = document.querySelector("#colorCode");
const h6 = document.querySelector("h6");
const btn1 = document.querySelector("#navBtn1");
const btn2 = document.querySelector("#navBtn2");
const spec = document.querySelector("#spec");
const random = document.querySelector("#random");


submit.addEventListener("click", function(){
	body.style.backgroundColor = inp.value;
})

btn1.addEventListener("click", function(){
	spec.classList.remove("d-none");
	random.classList.add("d-none");
})
btn2.addEventListener("click", function(){
	spec.classList.add("d-none");
	random.classList.remove("d-none");
})


rBtn.addEventListener("click", function(){
	function getRandomInt(max) {
	  return Math.floor(Math.random() * max);
	}

	var r = getRandomInt(255);
	var g = getRandomInt(255);
	var b = getRandomInt(255);
	var a = getRandomInt(10) / 10;

	var color = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")"  ;
	console.log(color);

	body.style.backgroundColor = color;
	h6.classList.remove("d-none")
	colorCode.innerText = color;

})

