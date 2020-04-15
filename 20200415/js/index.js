let codeModule = (function () {
    let columns = Array.from(document.querySelectorAll('.column')),
        data = [];
    let getData = function getData() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://zhouxiaotian.github.io/flowapi/images/1.jpg', false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = xhr.responseText;
            }
        }
        xhr.send(null);

    };
    let render = function render() {
        data=data.map(item=>{
            let h = item.height,
                w = item.width;
            h = (230 * h) / w;
            item.height = 230;
            item.width = h;
            return item;
        })
        for (let i = 0; i < data.length; i += 3) {
            let group = data.slice(i, i + 3);
            group.sort((a, b) => {
                return a.height = b.height;
            })
            columns.sort((a, b) => {
                return b.offsetHeight = a.offsetHeight;
            })
            group.forEach((item, index) => {
                let {
                    pic,
                    title,
                    height,
                    link
                } = item;
                let card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<a href="${link}">
                <div class="lazyImg" style="height:${height}px">
                    <img src="" alt="" data-image="${pic}">
                </div>
                <p>${title}</p>
            <a>`;
            columns[index].appendChild(card);

            })
        }
    };
    let lazyImg=function lazyImg(){
        let lazyImgs=document.querySelectorAll('.lazyImg');
        [].forEach.call(lazyImgs,lazyImg=>{
            let A=ultis.offset(lazyImg).top+lazyImg.offsetHeight/2;
            let B=document.documentElement.scrollHeight+document.documentElement.clientHeight;
            let isload=lazyImg.getAttribute('isload');
            if(isload!=='true'){
                return;
            }
            if(A<=B){
                lazyImage(lazyImg);
            }
        })
    };
    let lazyImage=function lazyImage(){
        let img=document.querySelectorAll('img');
         dataimsge=img.getAttribute('data-imsge');

    };
    return {
        init() {
            getData();
            render();
            lazyImg();
            window.onscroll=function(){
                lazyImg();
            };
        }
    }
})();
codeModule.init();