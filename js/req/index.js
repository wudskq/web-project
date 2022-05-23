//实例化对象
var xhr = new XMLHttpRequest();
//声明请求
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

//监听状态
xhr.onreadystatechange = handleReq;
//回调函数
function handleReq() {
    //获取root容器
    var root = document.querySelector('.root');
    // 通信成功时，状态值为4
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // console.log(xhr.responseText);
            var ul = document.querySelector('.data_1');
            root.appendChild(ul);
            var reps = xhr.response;
            var data = JSON.parse(reps);
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.href = 'https://jsonplaceholder.typicode.com/posts/' + element.id;
                a.append(element.id + '' + element.title)
                li.append(a);
                ul.appendChild(li);
            }
        } else {
            console.error(xhr.statusText);
        }
    }
}
//发送请求
xhr.send();