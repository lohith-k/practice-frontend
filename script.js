
pIdEl=document.getElementById("passengerId");
pNameEl=document.getElementById("passengerName");
pEmailEl=document.getElementById("passengerEmail");
pPasswordEl=document.getElementById("passengerPassword");
pAddressEl=document.getElementById("passengerAddress");
pContactEl=document.getElementById("passengerContact");

pFieldEl=document.getElementsByClassName("passengerField");
setId();

let details={
    id:"",
    name:"",
    email:"",
    password:"",
    address:"",
    contact:""
}
function onRegister()
{
    
        details.id=pIdEl.value;
        details.name=pNameEl.value;
        details.email=pEmailEl.value;
        details.password=pPasswordEl.value;
        details.address=pAddressEl.value;
        details.contact=pContactEl.value;
        localStorage.setItem("userid", details.id);
        localStorage.setItem("username", details.name);
        localStorage.setItem("useremail", details.email);
        window.location.href="success.html";
    
    
}



function setId()
{
    this.pIdEl.value=Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 100000;
}


function validFields()
{
    const para = document.createElement("p");

    if(pNameEl.value=="")
    {
        const node = document.createTextNode("This Field is required");
            pFieldEl[1].appendChild(node);
            return false;
    }
return true;
}