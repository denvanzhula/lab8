document.body.innerHTML = '<div id=wrapper><div class="userenter"><label for="surname" class="labels">Створіть нікнейм</label><input type="text" class="inputs" placeholder="Введить нік" id="usname"></div><div class="submits"><button id="start">Підтвердити</button></div></div><p id="qwerty"></p>'
var button=document.getElementById('start');
button.addEventListener('click',()=>{
	var wrapper=document.getElementById("wrapper");
	var sideUser=document.createElement("div");
	var sideGenerate=document.createElement("div");
	var sidePC=document.createElement("div");
	var inputUserName=document.getElementById("usname");
	var userName=inputUserName.value;
	
	wrapper.innerHTML=" ";
	wrapper.appendChild(sideUser);
	wrapper.appendChild(sideGenerate);
	wrapper.appendChild(sidePC);
	createSide(sideUser,userName,"user");
	createSide(sidePC,"PC","pc");
	var buttonGenerate=document.createElement("button");
	wrapper.style.flexDirection="row";
	sideUser.className="side";
	sidePC.className="side";
	sideGenerate.className="side";
	sideGenerate.id="generate_side";
	buttonGenerate.innerText="Generate";
	sideGenerate.appendChild(buttonGenerate);
	buttonGenerate.addEventListener("click",game);
})

function createSide(side,name,id){
	var label=document.createElement("label");
	var box=document.createElement("div");
	var number =document.createElement("div");
	var Text =document.createElement("p");
	var textBox=document.createElement("p");
	side.appendChild(label);
	side.appendChild(number);
	side.appendChild(box);
	number.appendChild(Text);
	box.appendChild(textBox);
	label.className="labels";
	box.className="box";
	number.className="randomNumber";
	number.id="idLabel";
	Text.id="p"+id;
	textBox.id="box"+id;
	Text.innerText="0";
	textBox.innerText="0";
	label.innerText=name;
}
function game(){
	var userNumber=document.getElementById("puser");
	var pcNumber=document.getElementById("ppc");
	var userBox=document.getElementById("boxuser");
	var pcBox=document.getElementById("boxpc");

	var res=document.getElementById("qwerty");
	
	var numUserBox=Number(userBox.innerText);
	var numPCBox=Number(pcBox.innerText);
	var userNum=Math.floor(Math.random()*20);
	var pcNum=Math.floor(Math.random()*20);
	
	userNumber.innerText=userNum;
	pcNumber.innerText=pcNum;
	if(userNum>pcNum){
		numUserBox++
	}else if(userNum<pcNum){
		numPCBox++
	}
	
	if(numPCBox==3){
		res.innerHTML="Поразка";
		res.style.color="red";
		clear(userNumber,pcNumber,userBox,pcBox);
		return
	}else if(numUserBox==3){
		res.innerHTML="Перемога!";
		res.style.color="green";
		clear(userNumber,pcNumber,userBox,pcBox);
		return
	}
	userBox.innerText=String(numUserBox);
	pcBox.innerText=String(numPCBox);
}
function clear(userNumber, pcNumber, userBox, pcBox, res){
	userNumber.innerText=0;
	pcNumber.innerText=0;
	userBox.innerText=0;
	pcBox.innerText=0;
	res.innerText=" ";
}
