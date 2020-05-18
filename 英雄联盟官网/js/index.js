let container = document.querySelector('.container'),
	wrapper = container.querySelector('.wrapper'),
	sliderList = wrapper.querySelectorAll('.slider'),
	pagination = container.querySelector('.pagination'),
	paginationList = pagination.querySelectorAll('li');
	
let step = 0,
	interval = 1000,
	autoTimer = null,
	len = sliderList.length;

// 自动轮播的方法
function autoMove() {
	if (step === (len - 1)) {
		step = 0;
		wrapper.style.transitionDuration = '0s';
		wrapper.style.left = '0px';
		wrapper.offsetWidth;
	}
	step++;
	wrapper.style.transitionDuration = '0.3s';
	wrapper.style.left = -step * 820 + 'px';
	paginationFocus();
}

// 焦点对齐
function paginationFocus() {
	let tempStep = step;
	tempStep === (len - 1) ? tempStep = 0 : null;
	[].forEach.call(paginationList, (item, index) => {
		if (index === tempStep) {
			item.className = 'active';
			return;
		}
		item.className = '';
	});
}

// 加载页面:开始自动轮播
autoTimer = setInterval(autoMove, interval);

// 鼠标进入到CONTAINER停止自动轮播，离开后自动轮播可以继续
container.onmouseenter = function () {
	clearInterval(autoTimer);
};
container.onmouseleave = function () {
	autoTimer = setInterval(autoMove, interval);
};

// 点击焦点实现切换
[].forEach.call(paginationList, (item, index) => {
	item.onclick = function () {
		if (index === step || (index === 0 && step === (len - 1))) {
			return;
		}
		step = index;
		wrapper.style.transitionDuration = '0.3s';
		wrapper.style.left = -step * 820 + 'px';
		paginationFocus();
	};
});
var ban = document.querySelector(".ban-nav");
var bli = ban.querySelectorAll("li");
var oDiv = document.querySelector(".ban-hudden");
var aDiv = oDiv.querySelector("div");
for(var i = 0; i < bli.length; i++) {
	bli[i].index = i;
	bli[i].onmouseover = function() {
		for(var i = 0; i < bli.length; i++) {
			bli[i].className = "";
		}
		this.className = "active";
		for(var j = 0; j < aDiv.length; j++) {
			aDiv[j].className = "";
		}
		aDiv[this.index].className = "active";
	}        
}

let headr=document.querySelector('.headr'),
lis=headr.querySelectorAll('li'),
	liner=document.querySelector('.liner');
   lis.onmouseover=function(){
	   liner.style.display='block';
   };