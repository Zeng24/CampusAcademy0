window.onload=function(){
	"use strict";
	var list=function(){
		//构建一个模块，提供接口
		var queue=[],store=[];//用于存储队列
		var res=[];
		return {
			separate_txt:function(){
				var characters=document.getElementsByClassName('txt1');
				var nul=/\W+/g;
				for(var i=0;i<characters.length;i++){
					debugger;
					// console.log(characters[0])
					if(characters[i].value!==''){
						if(characters[i].value.search(/[^\s\w,，、]+/)=== -1){
							// debugger
							// console.log('a' + characters[i])
							store=characters[i].value.split(nul);
						}
						if(store[store.length-1]===""){
							store.pop();
						}
						if(store[0]===""){
							store.shift();
							}
					}
				}
			},//txt1的
			separate_text:function(){
				var characters=document.getElementById('text1');
				var nul=/\W+/g;
				console.log(characters)
				if(characters.value!==''){
					if(characters.value.search(/[^\s\w,，、]+/)===-1){
						store.characters.value.split(nul);
					}
					if(store[store.length-1]===""){
						store.pop();
					}
					if(store[0]===""){
						store.shift();
					}
				}
			},//文本框的
			in:function(){
				var json={};
				for(var n=0;n<store.length;n++){
					if(!json[store[i]]){
						res.push(store[i]);
						json[store[i]]=1;
					}
				}//查重
				for(i=res.length-1;i>=0;i--){
					queue.unshift(res[i]);
				}//输入数组
				if(queue.length>10){
					for(i=0;queue.length==10;i++){
						queue.shift();
					}
				}
			},
			del:function(){
				alert(queue[0]+'被删了');
				queue[0].shift();
			},
			draw_txt1:function(){
				var text='';
				var lis=document.getElementsByClassName('ul1');
				var character=document.getElementsByClassName('txt1');
				for(i=0;i<queue.length;i++){
					if(character.search(/[^\s\w,，、]+/)===1){
						text+='<li>'+queue[i]+'</li>';
					}
					lis.innerHTML=text;
					store=[];//清除存储数组
				}
			},
			draw_text:function(){
				var text1='';
				var list=document.getElementById('ul2');
				var characters=document.getElementById('text1');
				for(i=0;i<queue.length;i++){
					text1+='<li>'+queue[i]+'</li>';
				}
				list.innerHTML=text1;
				store=[];//清除数组
			}
		};
	};
	var Ospan=document.getElementsByTagName('span');
	var Dele=document.getElementsByClassName('dele');
	var txt1Value=document.getElementsByClassName('txt1');
	var Obutton=document.getElementById('Ok');
	var link=list();
	for(var b=0;b<Ospan.length;b++){
		Ospan[b].index=b;
		Ospan[b].onmouseover=function(){
			Dele[this.index].style.display='inline-block';
		}
	}//鼠标滑过显示删除按钮
	for(var i=0;i<Dele.length;i++){
		Dele[i].onclick=function(){
			debugger
			link.separate_txt();
			link.del();
			link.draw_txt1();
		}
	}//点击删除
	debugger
	for(var a=0;a<txt1Value.length;a++){
		txt1Value.index=a;
		if(txt1Value[a].value!==''){
			txt1Value[a].addEventListener('change',link.separate_txt(),false);
			txt1Value[a].addEventListener('change',link.in(),false);
			txt1Value[a].addEventListener('change',link.draw_txt1(),false);
				}
			}
		
	Obutton.onclick=function(){
		link.separate_text();
		link.in();
		link.draw_text();
	}
}