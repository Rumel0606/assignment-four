let inteviewCountList = [];
let rejectedCountList = [];

const totalCount = document.getElementById("total-count")
const inteviewCount = document.getElementById("interview-count")
const rejectedCount = document.getElementById("rejected-count")
const totalJobs = document.getElementById("totalJobs")

// console.log(totalCount,inteviewCount,rejectedCount);

const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main')
const emptyCardSection = document.getElementById("empty-card")
// console.log(allCardsSection,mainContainer,emptyCardSection);

function calCulate(){
    totalCount.innerText= allCardsSection.children.length;
    inteviewCount.innerText = inteviewCountList.length;
    rejectedCount.innerText = rejectedCountList.length
    totalJobs.innerText = allCardsSection.children.length + " Jobs"
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

    if(id == "interviewBtn"){
        allCardsSection.classList.add("hidden")
        emptyCardSection.classList.remove("hidden")
        totalJobs.innerText = inteviewCountList.length + " of " +  allCardsSection.children.length + " Jobs";
    }
    else if (id == 'allBtn') {
        allCardsSection.classList.remove('hidden');
        emptyCardSection.classList.add('hidden')
}   
else if (id == 'rejectedBtn') {
        allCardsSection.classList.add('hidden');
        emptyCardSection.classList.remove('hidden')
        totalJobs.innerText = rejectedCountList.length + " of " +  allCardsSection.children.length + " Jobs";
    }
}

 mainContainer.addEventListener('click',function(e){
    // console.log(e.target.classList.contains('inter-btn'));
       if(e.target.classList.contains('inter-btn')){
     const parentNode = e.target.parentNode.parentNode;
      const companyName = parentNode.querySelector(".compani-name").innerText;
      const jobPosition = parentNode.querySelector(".position").innerText;
      const jobStatus = parentNode.querySelector(".job-status").innerText;
      const jobSituion = parentNode.querySelector(".jobSituion").innerText;
      const jobDes = parentNode.querySelector(".jobDes").innerText;
    //   console.log(companyName,jobPosition,jobStatus,jobSituion,jobDes); 
        parentNode.querySelector(".jobSituion").innerText = "Interview"
      
    const cardItems = {
        companyName,
        jobPosition,
        jobStatus,
        jobSituion : "Interview",
        jobDes
    }
    const existingInterviewItem = inteviewCountList.find(item => item.companyName == inteviewCountList.companyName);
    if(!existingInterviewItem){
        inteviewCountList.push(cardItems)
    }
     



    renderinteviewCount()
    calCulate();
       }
      else  if(e.target.classList.contains('reject-btn')){
     const parentNode = e.target.parentNode.parentNode;
      const companyName = parentNode.querySelector(".compani-name").innerText;
      const jobPosition = parentNode.querySelector(".position").innerText;
      const jobStatus = parentNode.querySelector(".job-status").innerText;
      const jobSituion = parentNode.querySelector(".jobSituion").innerText;
      const jobDes = parentNode.querySelector(".jobDes").innerText;
    //   console.log(companyName,jobPosition,jobStatus,jobSituion,jobDes); 
        parentNode.querySelector(".jobSituion").innerText = "Rejected"
      
    const cardItems = {
        companyName,
        jobPosition,
        jobStatus,
        jobSituion: "Rejected",
        jobDes
    }
    const existingRejectItem = rejectedCountList.find(item => item.companyName == rejectedCountList.companyName);
    if(!existingRejectItem){
        rejectedCountList.push(cardItems)
    }
    renderRejecrCount()
    calCulate();
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
            <p class=" compani-name text-[18px] font-semibold">${item.companyName}</p>
            <p class="position">${item.jobPosition}</p>
            </div>
            <div><img src="./images/Trash.png" class="deletBtn cursor-pointer" ></div>
        </div>
        <p class="mt-6 job-status">${item.jobStatus}</p>
        <button class="bg-[#EEF4FF] py-1 px-3 rounded-sm mt-7 jobSituion">Not applied</button>
        <p class="mt-2 jobDes">${item.jobDes}</p>
      <div class="mt-2.5">
          <button class="border-2 border-green-500 px-3 text-green-600 py-0.5 rounded-sm inter-btn">Interview</button>
        <button class="border-2 border-red-500 px-3 text-red-600 py-0.5 rounded-sm reject-btn">Rejected</button>
      </div>
        </div>`

//     div.innerHTML = `
// <div class="bg-[#faf7f7] p-6 mt-3">
//     <div class="flex justify-between mt-4">
//         <div class="space-y-1">
//             <p class="compani-name text-[18px] font-semibold">${item.companyName}</p>
//             <p class="position">${item.jobPosition}</p>
//         </div>
//         <div><img src="./images/Trash.png"></div>
//     </div>
//     <p class="mt-6 job-status">${item.jobStatus}</p>
//     <button class="bg-[#EEF4FF] py-1 px-3 rounded-sm mt-7 jobSituion">Interview</button>
//     <p class="mt-2 jobDes">${item.jobDes}</p>
// </div>
// `
        emptyCardSection.appendChild(div)
    }
 }


  function renderRejecrCount(){
    emptyCardSection.innerHTML ='';
    
    for(let reject of rejectedCountList){
        console.log(reject);
        let div = document.createElement('div')
        div.className = "bg-[#faf7f7] p-6 mt-3";
        div.innerHTML =`
        <div class="bg-[#faf7f7] p-6 mt-3">
            <div class="flex justify-between mt-4">
            <div class="space-y-1">
            <p class=" compani-name text-[18px] font-semibold">${reject.companyName}</p>
            <p class="position">${reject.jobPosition}</p>
            </div>
            <div><img src="./images/Trash.png" class="deletBtn cursor-pointer" ></div>
        </div>
        <p class="mt-6 job-status">${reject.jobStatus}</p>
        <button class="bg-[#EEF4FF] py-1 px-3 rounded-sm mt-7 jobSituion">Not applied</button>
        <p class="mt-2 jobDes">${reject.jobDes}</p>
      <div class="mt-2.5">
          <button class="border-2 border-green-500 px-3 text-green-600 py-0.5 rounded-sm inter-btn">Interview</button>
        <button class="border-2 border-red-500 px-3 text-red-600 py-0.5 rounded-sm reject-btn">Rejected</button>
      </div>
        </div>`

//     div.innerHTML = `
// <div class="bg-[#faf7f7] p-6 mt-3">
//     <div class="flex justify-between mt-4">
//         <div class="space-y-1">
//             <p class="compani-name text-[18px] font-semibold">${item.companyName}</p>
//             <p class="position">${item.jobPosition}</p>
//         </div>
//         <div><img src="./images/Trash.png"></div>
//     </div>
//     <p class="mt-6 job-status">${item.jobStatus}</p>
//     <button class="bg-[#EEF4FF] py-1 px-3 rounded-sm mt-7 jobSituion">Interview</button>
//     <p class="mt-2 jobDes">${item.jobDes}</p>
// </div>
// `
        emptyCardSection.appendChild(div)
    }
 }

