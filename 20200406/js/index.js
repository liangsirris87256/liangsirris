(function(){
   let navList=document.querySelectorAll('.navbar-link .nav-item'),
   proudctBox=document.querySelector('.proudctBox'),
   data=null,
   cardList=null;


   let xhr=new XMLHttpRequest;
   xhr.open('GET', './json/product.json', false);
   xhr.onreadystatechange=()=>{
       if(xhr.readyState===4&&xhr.status===200){
           data=JSON.parse(xhr.responseText);
       }
   }
   xhr.send(null);
    

   let str=``;
   for( let i=0;i<data.length;i++){
      let item=data[i];
   let {
       id,
       img,
       hot,
       time,
       price

   }=item;
   str+= `<div class="card" data-price='${price}'data-hot='${hot}' data-time='${time}'>
   <img src="${img}" >
<h3>${id}</h3>
<p class="text">${price}</p>
<p class="text">${time}</p>
<p class="text">${hot}已购买</p>
</div>`
   }
    proudctBox.innerHTML=str;
    cardList=proudctBox.querySelectorAll('.card');


    for (let i = 0; i < navList.length; i++) {
		let item = navList[i];
		item.flag = -1;
		item.onclick = function () {
			let arr = Array.from(cardList);
			for (let z = 0; z < navList.length; z++) {
				if (navList[z] !== this) {
					navList[z].flag = -1;
				}
			}
			this.flag *= -1;
			let char = "data-price";
			i === 1 ? char = 'data-time' : null;
			i === 2 ? char = 'data-hot' : null;
			arr.sort((a, b) => {
				a = a.getAttribute(char);
				b = b.getAttribute(char);
				if (char === 'data-time') {
					a = a.replace(/-/g, '');
					b = b.replace(/-/g, '');
				}
				return (a - b) * this.flag;
			});

			for (let j = 0; j < arr.length; j++) {
				proudctBox.appendChild(arr[j]);
			}
		};
	}

})();