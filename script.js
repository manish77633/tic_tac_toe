// let btn=document.createElement("button");
// btn.innerText="click me ";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// let ins=document.querySelector("body");
// ins.prepend(btn);


// let p=document.querySelector("p")
// p.classList.add("newclass")

// let btn=document.querySelector(".btn");
// btn.onclick=()=>{
// 	console.log("button clicked");
// 	let a=5;
// 	a++;
// 	console.log(a);
// };
// btn.onclick=(e)=>{
// 	console.log(e);
// 	console.log(e.type);
	
// };

// let modebtn=document.querySelector("#btn");
// let body=document.querySelector("body");
// let mode="light";


// modebtn.addEventListener("click",()=>{
// 	if(mode==="light"){
// 		mode="dark";
// 		body.classList.add("dark");
// 		body.classList.remove("light");
// 	}
// 	else{
// 		mode="light";
// 		body.classList.add("light");
// 		body.classList.remove("dark");
// 	}
// console.log(mode);
// console.log("djflksdf");
// });


// =============================tic tac toe==========================

let boxes=document.querySelectorAll(".box");
let newgamebtn=document.querySelector(".newgame");
let resetbtn=document.querySelector(".reset");
let msg=document.querySelector(".msgg");
let winner=document.querySelector(".winner");

let turno=true;
let count=0;

const winpatter=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
	if(turno){
		
		box.innerText="O";
		turno=false;
	}else{
		box.innerText="X";
		turno=true;
	}
	box.disabled=true;
	count++;

	let iswinner=checkwinner();
	if(count===9 && !iswinner){
		gamedrew();
	}
});
});
const gamedrew=()=>{
	winner.innerText=`Game was drew`;
	msg.classList.remove("hide");
	disablebox();
}

const enablebox=()=>{
	for(let box of boxes){
		box.disabled=false;
		box.innerText="";
	}
}
const resetgame=()=>{
	turno=true;
	count=0;
	enablebox();
	msg.classList.add("hide");
};
const disablebox=()=>{
	for(let box of boxes){
		box.disabled=true;
	}
}
const showwinner=(win)=>{
	winner.innerText=`Congratulations , Winner is ${win}`;
	msg.classList.remove("hide");
	disablebox();
};
const checkwinner=()=>{
	for(let patters of winpatter){
		let pat1val=boxes[patters[0]].innerText;
		let pat2val=boxes[patters[1]].innerText;
		let pat3val=boxes[patters[2]].innerText;

		if(pat1val!="" && pat2val!="" && pat3val!=""){
			if(pat1val===pat2val && pat2val===pat3val){
				showwinner(pat1val);
				return true;
			}
		}
		
	}
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);