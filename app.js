
// localStorage.setItem("arr",[]);

const showPopup = () => {
    document.getElementById('popup').style.display='block'
  
}


const saveTaskToLocalStorage = ()=>{
    let taskTitle = document.getElementById("task-title").value
    let taskDescription = document.getElementById("task-dsc").value
    let taskDate = document.getElementById("task-date").value
    let obj = {taskTitle,taskDescription,taskDate};

    var arr = JSON.parse(localStorage.getItem("taskArray"));
    console.log(typeof arr)
    localStorage.setItem("taskArray",JSON.stringify([...arr, obj]));
    document.getElementById('popup').style.display='none'



}
