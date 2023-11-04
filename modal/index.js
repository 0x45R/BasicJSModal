const modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");
document.body.appendChild(modalContainer);

function closeModal(){
  modalContainer.classList.remove("open");
  return new Promise((resolve)=>setTimeout(resolve, 150))
}
function openModal({content = "", icon = '<i class="ti ti-circle"></i>', canClose, controls}){
  modalContainer.classList.add("open");
  modalContainer.innerHTML = `
    <div class='modal-container__plate'>
      <div class='modal-container__plate__icon'>
      ${icon}
      </div>
      <div class='modal-container__plate__main'>
        <p class='modal-container__plate__main__title'>${content}</p>
        <div class='modal-container__plate__main__content'>
          <div class='modal-container__plate__main__content__controls'>
            ${(controls) ? controls : ""}
          </div>
        </div>
      </div>
      ${(canClose) ? "<div class='modal-container__plate__close' onclick='closeModal()'><i class='ti ti-x'></i></div>" : ""}

    </div>
`;
}

function openAlert(modal){
  openModal({...modal, canClose: true});
}
function openPrompt(modal){
  return new Promise((resolve, reject)=>{
    openModal({...modal, canClose: false, controls:
    ` <button class='js-prompt-resolve'>YES</button>
      <button class='js-prompt-reject'>NO</button>
    `})
    document.querySelector('.js-prompt-resolve').addEventListener("click",()=>{
      closeModal()
        .then(()=>resolve(true))
    })
    document.querySelector('.js-prompt-reject').addEventListener("click",()=>{
      closeModal()
        .then(reject)
    })
  })
}

