function getFormvalue() {
    //Write your code here
	let fn = document.querySelector("input[name=fname]");
    let ln = document.querySelector("inut[name=lname]");

    alert(`${fn.value} ${ln.value}`);

}
