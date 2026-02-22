let inteviewCountList = [];
let rejectedCountList = [];

const totalCount = document.getElementById("total-count")
const inteviewCount = document.getElementById("interview-count")
const rejectedCount = document.getElementById("rejected-count")

// console.log(totalCount,inteviewCount,rejectedCount);

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main')
const emptyCardSection = document.getElementById("empty-card")
// console.log(allCardsSection,mainContainer,emptyCardSection);

function calCulate(){
    totalCount.innerText= allCardsSection.children.length;
    inteviewCount.innerText = inteviewCountList.length;
    rejectedCount.innerText = rejectedCountList.length
    
}
calCulate();

const allBtn = document.getElementById("allBtn")
const interviewBtn = document.getElementById("interviewBtn")
const rejectedBtn = document.getElementById("rejectedBtn")

function toggleStyle(id){
    allBtn.classList.remove('bg-[#4067c9]')
    interviewBtn.classList.remove('bg-[#4067c9]')
    rejectedBtn.classList.remove('bg-[#4067c9]')

    allBtn.classList.add('bg-[#f8f4f4]',"text-black")
    interviewBtn.classList.add('bg-[#f8f4f4]',"text-black")
    rejectedBtn.classList.add('bg-[#f8f4f4]',"text-black")

const selected = document.getElementById(id)
selected.classList.remove('bg-[#f8f4f4]',"text-black")
selected.classList.add('bg-[#4067c9]',"text-black")
}



 mainContainer.addEventListener('click',function(e){
    console.log(e.target.classList.contains('inter-btn'));
       if(e.target.classList.contains('inter-btn')){
              const parentNode = e.target.parentNode.parentNode;
      const companyName = parentNode.querySelector(".compani-name").innerText;
      const jobPosition = parentNode.querySelector(".position").innerText;
      const jobStatus = parentNode.querySelector(".job-status").innerText;
      const jobSituion = parentNode.querySelector(".jobSituion").innerText;
      const jobDes = parentNode.querySelector(".jobDes").innerText;
    //   console.log(companyName,jobPosition,jobStatus,jobSituion,jobDes);

    const cardItems = {
        companyName,
        jobPosition,
        jobStatus,
        jobSituion,
        jobDes
    }
    const existingInterviewItem = inteviewCountList.find(item => item.companyName == inteviewCountList.companyName);
    if(!existingInterviewItem){
        inteviewCountList.push(cardItems)
    }
    renderinteviewCount()
       }
    // console.log(inteviewCountList);
 })

 function renderinteviewCount(){
    emptyCardSection.innerHTML ='';
    
    for(let item of inteviewCountList){
        console.log(item);
        let div = document.createElement('div')
        div.className = "bg-[#faf7f7] p-6 mt-3";
        div.innerHTML =`
        <div class="bg-[#faf7f7] p-6 mt-3">
            <div class="flex justify-between mt-4">
            <div class="space-y-1">
            <p class=" compani-name text-[18px] font-semibold">DataViz Solutions</p>
            <p class="position">Data Visualization Specialist</p>
            </div>
            <div><img src="./images/Trash.png" ></div>
        </div>
        <p class="mt-6 job-status">Remote • Full-time • $130,000 - $175,000</p>
        <button class="bg-[#EEF4FF] py-1 px-3 rounded-sm mt-7 jobSituion">Not applied</button>
        <p class="mt-2 jobDes">Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.</p>
      <div class="mt-2.5">
          <button class="border-2 border-green-500 px-3 text-green-600 py-0.5 rounded-sm">Interview</button>
        <button class="border-2 border-red-500 px-3 text-red-600 py-0.5 rounded-sm">Rejected</button>
      </div>
        </div>
        `
    }
 }

