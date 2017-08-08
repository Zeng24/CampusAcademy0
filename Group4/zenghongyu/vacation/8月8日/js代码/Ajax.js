window.onload=function(){
	var xhr=new XMLHttpRequest();
	xhr.open("get","http://study.163.com/webDev/hotcouresByCategory.htm",true);
	xhr.onload=function(){
		if((xhr.status>=200)&& xhr.status<300||xhr.status==304){
			var Copybook=JSON.parse(xhr.responseText);
			console.log(Copybook);
			var i;
			var Imfor=document.getElementsByClassName("imfor");
			var Img=document.getElementsByTagName("img");
			var Name=document.getElementsByClassName("name");
			var Provider=document.getElementsByClassName("provider");
			var TargetUser=document.getElementsByClassName("targetUser");
			var ProviderDesc=document.getElementsByClassName("providerDesc");
			for(var n=1;n<Copybook.length-2;n++){
				let Node=document.getElementsByClassName("div")[0].cloneNode(true);
				document.getElementById("wrap").appendChild(Node);
			}//复制节点
			var Adiv=document.getElementById("wrap");
			var Ali=document.getElementsByClassName("div");
			var timer=null;
			var speed=2;
			Adiv.innerHTML+=Adiv.innerHTML;
			Adiv.style.width=Ali[0].offsetWidth*Ali.length+'px';
			timer=setInterval(function(){
				Adiv.style.left=Adiv.offsetLeft-speed+'px';
				if(Adiv.offsetLeft<-Adiv.offsetWidth/2){
					Adiv.style.left="0px";
				}
			},30);
			Adiv.onmouseover=function(){
				clearInterval(timer);
			}
			Adiv.onmouseout=function(){
				timer=setInterval(function(){
				Adiv.style.left=Adiv.offsetLeft-speed+'px';
				if(Adiv.offsetLeft<-Adiv.offsetWidth/2){
					Adiv.style.left="0px";
				}
			},30);
			}
			}
			for(i=0;i<Img.length+1;i++){
				Name[i].innerHTML="<span>Name:</span>"+Copybook[i].name;
				Provider[i].innerHTML="<span>Provider:</span>"+Copybook[i].provider;
				TargetUser[i].innerHTML="<span>TargetUser:</span>"+Copybook[i].targetUser;
				ProviderDesc[i].innerHTML="<span>ProviderDesc:</span>"+Copybook[i].providerDesc;
				Img[i].src=Copybook[i].bigPhotoUrl;
			}//添加文字、图片内容
		}
	xhr.send(null);
};