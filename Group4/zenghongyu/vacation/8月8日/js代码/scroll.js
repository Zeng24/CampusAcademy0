var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},
	//添加事件
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},
	//删除事件
	getEvent:function(event){
		return event?event:window.event;
	},//检测event对象
	getWheelDelta:function(event){
		return event.wheelDelta?event.wheelDelta:event.detail*(-40);
	}
};

EventUtil.addHandler(window,'load',function(){
	var Gwrap=document.getElementById('wrap');
	var Vheight=window.innerHeight;//获取屏幕高度
	var Oli=Gwrap.getElementsByTagName('li');
	var Oclick=document.getElementById("click");
	for(var i=0;i<Oli.length;i++){
		Oli[i].style.height=Vheight+'px';
	}//为每个Oli设置屏幕的高 
EventUtil.addHandler(Gwrap,'mousewheel',function(event){
	event=EventUtil.getEvent(event);
	event.preventDefault();
	var way=EventUtil.getWheelDelta(event);
	var Oheight=0;
	var timer=null;
	if(way>0){
		timer=setInterval(function(){
			if(Oheight+10<=Vheight){
				Oheight+=10;
				window.scrollBy(0,-10);
			}
			else{
				window.scrollBy(0,Oheight-Vheight);
				clearInterval(timer);
			}
		},5);
	}
	else{
		timer=setInterval(function(){
			if(Oheight+10<=Vheight){
				Oheight+=10;
				window.scrollBy(0,10);
			}
			else{
				window.scrollBy(0,-(Oheight-Vheight));
				clearInterval(timer);
			}
		},5);
	}
});
});