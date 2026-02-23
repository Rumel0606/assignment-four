function handleCard(event) {
    // console.log("clicked");

    if (event.target.classList.contains("success-btn-of-card")) {
        const parentNode = event.target.closest(".card-item");
        // console.log(parentNode);

        // card elements
        const titleOfCard = parentNode.querySelector(".title-of-card").innerText;
        const skillOfCard = parentNode.querySelector(".skill-of-card").innerText;
        const salaryOfCard = parentNode.querySelector(".salary-of-card").innerText;
        const statusOfCard = parentNode.querySelector(".status-of-card");
        const descriptionOfCard = parentNode.querySelector(".description-of-card").innerText;



        const cardInfo = {
            titleOfCard,
            skillOfCard,
            salaryOfCard,
            statusOfCard: "Interview",
            descriptionOfCard

        }
        // console.log(cardInfo);




        const interviewExist = interviewList.find(item => item.titleOfCard === cardInfo.titleOfCard);

        if (!interviewExist) {
            interviewList.push(cardInfo);
            console.log(interviewList.length);
        }

        rejectedList = rejectedList.filter(item => item.titleOfCard != cardInfo.titleOfCard);

        if (currentStatus === "rejected-filtering-btn") {
            renderRejected();

        }
        calculate();

    } else if (event.target.classList.contains("warning-btn-of-card")) {
        const parentNode = event.target.closest(".card-item");
        // console.log(parentNode);

        // card elements
        const titleOfCard = parentNode.querySelector(".title-of-card").innerText;
        const skillOfCard = parentNode.querySelector(".skill-of-card").innerText;
        const salaryOfCard = parentNode.querySelector(".salary-of-card").innerText;
        const statusOfCard = parentNode.querySelector(".status-of-card");
        const descriptionOfCard = parentNode.querySelector(".description-of-card").innerText;



        const cardInfo = {
            titleOfCard,
            skillOfCard,
            salaryOfCard,
            statusOfCard: "Rejected",
            descriptionOfCard

        }
        // console.log(cardInfo);

        const rejectedExist = rejectedList.find(item => item.titleOfCard === cardInfo.titleOfCard);
        if (!rejectedExist) {
            rejectedList.push(cardInfo);

            console.log(rejectedList.length);
        }

        interviewList = interviewList.filter(item => item.titleOfCard != cardInfo.titleOfCard);

        if (currentStatus === "interview-filtering-btn") {
            renderInterview();
        }

        calculate();


    } else if (event.target.classList.contains("delete-btn-of-card")) {
        const parentNode = event.target.closest(".card-item");
        const title =parentNode.querySelector(".title-of-card").innerText;

        parentNode.remove();

        interviewList = interviewList.filter(item => item.titleOfCard !== title);
        rejectedList = rejectedList.filter(item => item.titleOfCard !== title);

        calculate();
        
        
        // console.log(parentNode);
        // if (currentStatus === "all-filtering-btn") {
        //     // renderRejected();
        //     parentNode.remove();

        //     calculate();
        // }

        // if (currentStatus === "interview-filtering-btn") {
        //     // renderRejected();
        //     parentNode.remove();
        //     // rejectedList.length.innerText -= 1 ;
        //     interviewList.pop();
            
            
        //     // rejectedCount.innerText = rejectedList.length;
        //     calculate();
        // }
        // if (currentStatus === "rejected-filtering-btn") {
        //     // renderRejected();
        //     parentNode.remove();
        //     // rejectedList.length.innerText -= 1 ;
        //     rejectedList.pop();

           
        //     // rejectedCount.innerText = rejectedList.length;
        //     calculate();
        // }
        // console.log()