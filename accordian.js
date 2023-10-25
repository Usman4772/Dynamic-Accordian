
document.addEventListener("DOMContentLoaded",()=>{
    LoadAllData(questions);
    setUpEventListeners();//if we don't do that then all Other code of button events will run before generating dynamic Html ....so that cause error that those buttons will not be found in Html but doing this way ..it will first generate Html by LoadAllData then call setUpEventListeners to add Event Listeners
})

let questions=[
    {
question:"What is difference Between UI and UX design?",
answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam voluptatem voluptatibus rerum. Sapiente, sit autem. Omnis nulla dolores a aliquid illum debitis neque ex vero. Vitae corporis totam debitis! necessitatibus facilis ad asperiores incidunt minus, dicta doloremque illo non, magni quas provident aut ullam dolorum quos. Minima aliquid debitis accusantium?",
    },
    {
question:"What is Your Name?",
answer:"My name is Usman Ali Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam voluptatem voluptatibus rerum. Sapiente, sit autem. Omnis nulla dolores a aliquid illum debitis neque ex vero. Vitae corporis totam debitis! necessitatibus facilis ad asperiores incidunt minus, dicta doloremque illo non, magni quas provident aut ullam dolorum quos. Minima aliquid debitis accusantium?",
    },
    {
question:"What is Your Age?",
answer:"I'm 19 Years Old Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam voluptatem voluptatibus rerum. Sapiente, sit autem. Omnis nulla dolores a aliquid illum debitis neque ex vero. Vitae corporis totam debitis! necessitatibus facilis ad asperiores incidunt minus, dicta doloremque illo non, magni quas provident aut ullam dolorum quos. Minima aliquid debitis accusantium?",
    },
]
let addMoreBtn=document.querySelector(".addMore")
let inputForm=document.querySelector(".inputForm")
let mainData=document.querySelector(".mainData")
let cancelInput=document.querySelector(".cancelInputform")
addMoreBtn.addEventListener("click",()=>{
inputForm.style.display="flex"
mainData.style.display="none"
})
cancelInput.addEventListener("click",()=>{
    inputForm.style.display="none"
mainData.style.display="block"
})
let saveBtn=document.querySelector(".addBtn")
let qInput=document.querySelector("#qInput")
let ansInput=document.querySelector("#textarea")
saveBtn.addEventListener("click",saveData)


function saveData(){
    let obj={};
    let ques=qInput.value
    let ans=ansInput.value
    obj.question=ques
    obj.answer=ans
  questions.push(obj)
//   console.log(questions)
  qInput.value=""
    ansInput.value=""
  cancelInput.click()
  mainContainer.innerHTML=""//to avoid doubling already present questions
  LoadAllData(questions);
  setUpEventListeners();
}

let mainContainer=document.querySelector(".mainContainer")



   

  
  function LoadAllData(data) {
    data.forEach((data) => {
      let container = document.createElement("div");
      container.className = "container";
      container.innerHTML = `
        <div class="heading-flex">
          <h1 class="heading">${data.question}</h1>
          <i class="fa-solid fa-chevron-up expand"></i>
        </div>
        <p class="paragraph hide">${data.answer}</p>
      `;
  
      mainContainer.appendChild(container);
    });
  }
  
  function setUpEventListeners() {
    let expandBtns = mainContainer.querySelectorAll(".expand");
  
    expandBtns.forEach((btn) => {
      btn.addEventListener("click", showAnswer);
    });
  }
  
  function showAnswer(e) {
    let target = e.target;
    let paragraph = target.parentElement.nextElementSibling;
    
    if (paragraph) {
      paragraph.classList.toggle("hide");
      target.classList.toggle("fa-chevron-down");
      target.classList.toggle("fa-chevron-up");
    }
  }

  //todo Note:if i make function using const then i have to putt it before adding event listener otehrwise it give error