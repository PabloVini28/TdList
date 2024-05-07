const Task = {

    add_Task(task_name){
        document.querySelector(".taskContent").innerHTML += `<div class = "Task">${task_name}</div>`
    }
}

const Card = {

    toggle(){
        document.querySelector(".card").classList.toggle("ativo")
    }
}

const Form = {

    aleatory(){
        if(document.querySelector("#mauricio").value.trim() == ""){
            window.alert("Escreva alguma fih!");
        }
        else{
            Task.add_Task(document.querySelector("#mauricio").value);
            Card.toggle()
        }
    }
}