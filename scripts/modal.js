const buttonsControllersModal = document.querySelectorAll("[data-control-modal]");

for(let index = 0; index < buttonsControllersModal.length; index++){
    buttonsControllersModal[index].addEventListener("click", (event)=>{
        event.preventDefault();
        let modalId = buttonsControllersModal[index].getAttribute("data-control-modal");
        document.getElementById(modalId).classList.toggle("show-modal");
    });
}








