const projectsContainer = '.projects-container';

const mobApps = [
"./../images/projects-section-images/img1.png",
"./../images/projects-section-images/img2.png",
"./../images/projects-section-images/img3.png",
]

const identities = [
    "./../images/projects-section-images/img4.png",
]

const interiorDesign = [
    "./../images/projects-section-images/img5.png",
]

const uiux = [
    "./../images/projects-section-images/img6.png",
    "./../images/projects-section-images/img7.png",
    "./../images/projects-section-images/img8.png",
]



const allProjects = [...mobApps, ...identities, ...interiorDesign, ...uiux];


const onClicked = (arr)=>{

   return(arr.map((project, index)=>{
        return `<div class="project project${index}">
                        <div class="project-img-wrapper">
                            <img class="project-img" src="${project}" alt="Photo of the project">
                        </div>
                        <div class="project-icon-container">
                            <i class="project-icon link flaticon-unlink-1"></i>
                            <i class="project-icon more flaticon-add-song"></i>
                        </div>
                    </div>`;
    })
    );
}

$('.btn1').click(()=> {
    $(projectsContainer).html(onClicked(allProjects));
});

$('.btn2').click(() => {
    $(projectsContainer).html(onClicked(mobApps));
});

$('.btn3').click(() => {
    $(projectsContainer).html(onClicked(identities));
});

$('.btn4').click(() => {
    $(projectsContainer).html(onClicked(interiorDesign));
});

$('.btn5').click(() => {
    $(projectsContainer).html(onClicked(uiux));
});





