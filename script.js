const questionButton = document.querySelector('.js-question-button');
const alertButton = document.querySelector('.js-alert-button');
const resultLabel = document.querySelector('.js-result-label');

function questionPayload(){
  openPrompt({content:"Are you sure???", icon:"<i class='ti ti-help-circle'></i>"})
    .then(()=>
      document.body.classList.add("explode")
    )

}

function alertPayload(){
  openAlert({content: "Red buttons are always bad...", icon:"<i class='ti ti-alert-triangle'></i>"})
}

questionButton.addEventListener("click", questionPayload)
alertButton.addEventListener("click", alertPayload)
