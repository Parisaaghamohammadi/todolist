
//show Date
let d = new getDate()

document.getElementById("demo").innerHTML = d.getDay()
console.log

//function of to do list
function additem() {
    let plad = document.getElementById("addplan").value
    if (plad == "") {
        alert("please enter a task")
    } else {
        let planLine = document.createElement("p")
        let planBox = document.createElement("span")
        let PlanText = document.createTextNode(plad)
        planBox.appendChild(PlanText)
        planLine.appendChild(planBox)
        let result = document.getElementById("result")
        result.appendChild(planLine)
        document.getElementById("addplan").value = ""
        let remTag = document.createElement("span")
        let remText = document.createTextNode("X")
        remTag.appendChild(remText)
        planLine.appendChild(remTag)
        planLine.addEventListener("click", redLine)
        function redLine() {
            planBox.style.textDecoration = "line-through"
        }
        let remove = document.createAttribute("onclick")
        remove.value = "this.parentNode.remove()"
        remTag.setAttributeNode(remove)

    }
}

function removeDivFunction() {
    MyDiv.parentNode.removeChild(MyDiv);
}
