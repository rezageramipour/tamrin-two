let btn = document.getElementById('btn');
let counter = 0;
btn.addEventListener("click", function () {
    // let arr = [];
    let app = document.getElementById('app');
    let texts = document.getElementById("Text").value;
    // let list = document.createElement('li');
    // let down = '<button><i class="bi bi-arrow-down-short"></i></button>';
    // let up = '<button><i class="bi bi-arrow-up-short"></i></button>';
    // let x = '<button><i class="bi bi-x"></i></button>';
    // arr.push(list);
    // console.log(arr)
    // list.innerHTML = texts + down + up + x;
    // app.appendChild(list);
    counter += 1;
    let data = {
        id: counter,
        title: texts,
    }
    app.innerHTML += mmd(data);
    let bdown = document.getElementById('btn-down');
    bdown.addEventListener("click", function () {
        // arr = document.getElementById(0).innerHTML =
        /*const node = document.getElementById("myList2").lastElementChild;
        document.getElementById("myList1").appendChild(node);*/
    })
});

function mmd(obj) {
    return `<li id="${obj.id}">
                <div>
                    <span>${obj.title}</span>
                    <button><i class="bi bi-arrow-down-short"></i></button>
                    <button onclick="up(${obj.id})"><i class="bi bi-arrow-up-short"></i></button>
                    <button onclick="removeEle(${obj.id})"><i class="bi bi-x"></i></button>
                </div>
            </li>`
}


function removeEle(id) {
    document.getElementById(id).remove();
}

function up(id) {
    document.getElementById(id)
}