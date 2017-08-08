window.onload=function(){
	var Show=document.getElementById("show");
	var Shadow=document.getElementById("shadow");
	var Cancel=document.getElementById("cancel");
	var Txt=document.getElementById("txt1");
	var Pass=document.getElementById("pass");
	var Onc=document.getElementById("on");
	Show.onclick=function(){
		Shadow.style.display="block";
	};
	Cancel.onclick=function(){
		Shadow.style.display="none";
	};
	Onc.onclick=function(){
		if(Txt.value==""||Pass.value==""){
			alert("密码或账号不能为空");
		}
		if(Txt.value.search(/[^\x00-\xff]/g)){
			alert("账号为英文字符");
		}else{
			alert("账号为中文");
		}
		if(Pass.value.length<6){
			alert("输入错误");
		}else{
			alert("密码的长度:"+Pass.value.length);
		}
	}
}