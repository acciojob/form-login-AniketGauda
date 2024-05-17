function getFormvalue(){
    let fn = document.querySelector("input[name=fname]");
    let ln = document.querySelector("input[name=lname]");

    alert(`${fn.value} ${ln.value}`);
}