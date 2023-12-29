window.addEventListener("DOMContentLoaded", function (){
 console.log("page loaded");
    const cancel = this.document.getElementById("cancleBtn");
    cancel.addEventListener("click", function (){
        window.location.href = "../pages/dashboard.html"
    })

    const reset = this.document.getElementById("resetBtn");
    reset.addEventListener("click", function (){
        resetForm();
    })

    const submitbtn = this.document.getElementById("submitBtn");
    submitbtn.addEventListener("click",function(){
        submitForm()
    })

})

function resetForm (){
    const input = document.getElementById("nameid");
    const dateinput = document.getElementById("dateid")
    const monthinput = document.getElementById("monthid")
    const yearinput = document.getElementById("yearid")
    const note = document.getElementById("noteid");
    const profileinput = document.querySelectorAll(".profile");
    const genderinput = document.querySelectorAll(".genderid");
    const deptinput = document.querySelectorAll(".deptid");
    input.value = "";
    note.value = "";
    dateinput.value ="";
    monthinput.value ="";
    yearinput.value ="";
    genderinput.forEach(ele =>{
        ele.checked = false
    })
    profileinput.forEach(ele=> {
        ele.checked = false
    });
    deptinput.forEach(ele =>{
        ele.checked = false
    })
}
function submitForm(){
    const subinput = document.getElementById("nameid");
    const subprofile = document.getElementById("profile")
    const subgender = document.getElementById("genderid")
    const subdate = document.getElementById("dateid")
    const submonth = document.getElementById("monthid")
    const subdept = document.getElementById("deptid")
    const subyear = document.getElementById("yearid")
    const subnote = document.getElementById("noteid");
    const startDatesub = subdate.value+submonth.value+subyear.value  
    let submitDeails ={ name:subinput.value
        ,note:subnote.value
        ,gender:subgender.value
        ,startDate:startDatesub
        ,profile:subprofile.value
        ,department:subdept.value}
    console.log(submitDeails);
    const data =JSON.stringify(submitDeails)
    console.log(data);
    localStorage.setItem("EmployeeDetails",data);
 }