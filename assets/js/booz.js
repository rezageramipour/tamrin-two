let btn = document.getElementById('btn');
btn.addEventListener("click", function () {
    let app = document.getElementById('app')
    let texts = document.getElementById("Text").value;
    let list = document.createElement('li')
    let down = '<button><i class="bi bi-arrow-down-short"></i></button>';
    let up = '<button><i class="bi bi-arrow-up-short"></i></button>';
    let x = '<button><i class="bi bi-x"></i></button>';
    list.innerHTML = texts + down + up + x;
    app.appendChild(list);
})


