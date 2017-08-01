window.onload=function(){
	'use strict';
	var list=function(){
		//构成一个模块，提供接口
		var queue=[],store=[],i;//用于存储队列
		return {
			separate:function(){
				var characters=document.getElementById('txt1').value;
				var nul= /\W+/g;//空格的正则表达式
				if(characters!==''){
					if(characters.search(/[^\s\w,，、]+/)===-1){
						//发现非法字符则不执行提取操作
						store=characters.split(nul);
						//返回提取后的字符数组，若文本框无输入，则返回一个store[0]=""的数组
						if(store[store.length-1]===""){
							store.pop();
						}//删除最后一个空格
						if(store[0]===""){
							store.shift();
						}
					}else{
					alert("只能以逗号、顿号、space为间隔标志");
						}
					}
				else{
					alert('没有字符输入');
				}
			},

			search:function(){
				var item=document.getElementById('show').getElementsByTagName('li');
				var char=document.getElementById('txt2').value;//获取查找内容
				var exist;
				for(i=0;i<queue.length;i++){
				if(queue[i].indexOf(char)!==-1){
					item[i].style.color='#fff';
					item[i].style.backgroundColor='#ccc';
					exist=1;
				}
				}
				if(!exist){
					alert('不在队列中');
					}
			},//查找函数，匹配成功后，改变字符颜色和背景色
			leftin:function(){
				for(i=store.length-1;i>=0;i--){
					queue.unshift(store[i]);
				}
			},//左侧插入
			rightin:function(){
				for(i=0;i<store.length;i++){
					queue.push(store[i]);
				}
			},//右侧插入
			leftout:function(){
				alert(queue[0]+'被删了');
				queue.shift();
			},//左侧删除
			rightout:function(){
				var len=queue.length-1;
				alert(queue[length-1]+'被删除了');
				queue.pop();
			},//右侧删除
			draw:function(){
				var text='';
				var lis=document.getElementById('show');//获取ul
				for(i=0;i<queue.length;i+=1){
					text+='<li>'+queue[i]+'</li>';
				}
				lis.innerHTML=text;
				store=[];//清楚存储数组
			}
		};
	};
	var button=document.getElementsByTagName('input');//获取按钮
	var link=list();//获取接口
	link.draw();//加载后绘制初始图
	//给按钮分配事件
	button[0].onclick=function(){
		link.separate();
		link.leftin();
		link.draw();
	};
	button[1].onclick=function(){
		link.separate();
		link.rightin();
		link.draw();
	}
	button[2].onclick=function(){
		link.separate();
		link.leftout();
		link.draw();
	}
	button[3].onclick=function(){
		link.separate();
		link.rightout();
		link.draw();
	}
	button[5].onclick=function(){
		link.draw();//每次查询重绘，可以消除上次查询结果
		link.search();
	}
}