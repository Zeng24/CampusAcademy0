window.onload=function(){
var Chuyu=document.getElementById('chuyu');
var Qing0=document.getElementById('qing0');
var Jia=document.getElementById('jia');
var Jian=document.getElementById('jian');
var Cheng=document.getElementById('cheng');
var Chu=document.getElementById('chu');
var Deng=document.getElementById('deng');
var Nine=document.getElementById('nine');
var Eight=document.getElementById('eight');
var Seven=document.getElementById('seven');
var Six=document.getElementById('six');
var Five=document.getElementById('five');
var Four=document.getElementById('four');
var Three=document.getElementById('three');
var Two=document.getElementById('two');
var One=document.getElementById('one');
var Zero=document.getElementById('zero');
var Point=document.getElementById('point');
var Txt1=document.getElementById('txt1');
	var a=null;
	var b=null;
	var sum=0;
	Nine.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'9';
	};
	Eight.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'8';
	};
	Seven.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'7';
	};
	Six.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'6';
	};
	Five.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'5';
	};
	Four.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'4';
	};
	Three.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'3';
	};
	Two.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'2';
	};
	One.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'1';
	};
	Zero.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'0';
	};
	Point.onclick=function(){
		Txt1.innerHTML=Txt1.innerHTML+'.';
	};
	Jia.onclick=function(){
		if(a==null){
			a=Txt1.innerHTML;
			Txt1.innerHTML='';
		}
		else{
			b=Txt1.innerHTML;
			sum=parseFloat(a)+parseFloat(b);
		}
	};
	Jian.onclick=function(){
		if(a==null){
			a=Txt1.innerHTML;
			Txt1.innerHTML='';
		}
		else{
			b=Txt1.innerHTML;
			sum=parseFloat(a)-parseFloat(b);
		}
	};
	Cheng.onclick=function(){
		if(a==null){
			a=Txt1.innerHTML;
			Txt1.innerHTML='';
		}
		else{
			b=Txt1.innerHTML;
			sum=parseFloat(a)*parseFloat(b);
		}
	};
	Chu.onclick=function(){
		if(a==null){
			a=Txt1.innerHTML;
			Txt1.innerHTML='';
		}
		else{
			b=Txt1.innerHTML;
			sum=parse=parseFloat(a)/parseFloat(b);
		}
	}
	Chuyu.onclick=function(){
		if(a==null){
			a=Txt1.innerHTML;
			Txt1.innerHTML='';
		}
		else{
			b=Txt1.innerHTML;
			sum=parseFloat(a)%parseFloat(b);
		}
	}
	Deng.onclick=function(){
		Txt1.innerHTML=sum;
	}
	Qing0.onclick=function(){
		Txt1.innerHTML='';
		a=null;
		b=null;
		sum=0;
	}
	
}