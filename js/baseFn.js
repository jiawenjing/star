//检测有没有这个class
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
 //添加一个class
function addClass(obj, cls) {  
    if (!hasClass(obj, cls)) obj.className += " " + cls;  
}  
  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
  
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls); 
    }else{  
        // addClass(obj, cls); 
    }  
}  
// class获取元素兼容写法
function getByClass(obj,sClass){
	//判断浏览器是否兼容系统提供的方法
	if(obj.getElementsByClassName){
		//兼容
		return obj.getElementsByClassName(sClass);
	}else{
		//不兼容
		var aResult = [];
		var aEle = obj.getElementsByTagName('*');
		
		return aResult;
	}
};
//获取非行间样式
function getStyle(obj,sName){
	if(obj.currentStyle){
		return obj.currentStyle[sName];
	}else{
		return getComputedStyle(obj,false)[sName];
	}
};
// 事件绑定兼容写法
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
// 删除事件绑定兼容写法
function removeEvent(obj,sEv,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(sEv,fn,false);
	}else{
		obj.detachEvent('on'+sEv,fn);
	}
}

// n-m之间的随机数（不包括m）
function radFN(n,m){
    return parseInt(n+Math.random()*(m-n))
}

function radFnTrue(n,m){
    var a=parseInt(n+Math.random()*(m-n));
    return a==0?1:a;
}
function oneTwo(n,m,z){
    var a=Math.random();
    if(a<0.35){
        return n;
    }else if(a>0.35&&a<0.7){
        return m;
    }else{
        return z;
    }
}
















