let btn = document.getElementById('btn');
let counter = 0;

function mmd2() {
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
}

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    mmd2();
});
btn.addEventListener("click", mmd2);

function mmd(obj) {
    return `<li id="${obj.id}">
                        <div class="d-flex justify-content-between p-1 bg-warning rounded my-1 div">
                            <span id="span" class="text-light mx-2">${obj.title}</span>
                            <span class="btns">
                                <button class="i-r bg-black text-light rounded" onclick="right(${obj.id})"><i class="bi bi-arrow-right-short"></i></button>
                                <button class="idd bg-white rounded" onclick="down(${obj.id})"><i class="bi bi-arrow-down-short"></i></button>
                                <button class="iuu bg-white rounded" onclick="up(${obj.id})"><i class="bi bi-arrow-up-short"></i></button>
                                <button class="bg-white rounded" onclick="removeEle(${obj.id})"><i class="bi bi-x"></i></button>
                                <button class="i-l bg-black text-light rounded" onclick="left(${obj.id})"><i class="bi bi-arrow-left-short"></i></button>
                            </span>
                        </div>
                        <ul id="ul${obj.id}">
                        </ul>
            </li>`;
}

function removeEle(id) {
    document.getElementById(id).remove();
}


function up(id) {
    let current = document.getElementById(id);
    let pre = current.previousSibling;
    current.parentNode.insertBefore(pre, current.nextSibling);
}

function down(id) {
    let current = document.getElementById(id);
    let next = current.nextSibling;
    next.parentNode.insertBefore(next, next.previousSibling);
}

function left(id) {
    let li = document.getElementById(`${id}`);
    li.remove();
    let ul_current = document.getElementById('app');
    ul_current.innerHTML += li.outerHTML;
    console.log(li);
    console.log(ul_current);
}

function right(id) {
    let li = document.getElementById(`${id}`);
    let ul = li.previousSibling.getElementsByTagName('ul')[0];
    ul.innerHTML += li.outerHTML;
    li.remove();
    console.log(li);
    console.log(ul);
}