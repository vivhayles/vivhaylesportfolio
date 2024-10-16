fetch('codingprojects.json')
    .then((res) => {
        return res.json() 
    })
    .then((data) => {
        const codingProjects = document.querySelector('#codingProjects')
        
        data.project.forEach((project) => {
            codingProjects.innerHTML += `
                <div class="codingPortfolio m-4 p-4 grid-container grid justify-items-center border-4 border-violet-300 rounded border-solid">
                    <h3 class = "text-lg font-medium ">${project.name}</h3>
                    <p class="desc">${project.description}</p>
                    <img class="image py-4 mx-auto" src="${project.img}" alt="blank placeholder image"/>
                    <a class = "pe-4 font-medium hover:text-violet-500" href="${project.githublink}" target="_blank">View on GitHub</a>
                    <a class = "pe-4 font-medium hover:text-violet-500" href="${project.livelink}" target="_blank">Live Demo</a>
                </div>
            `
        })

    })

const menuButton = document.querySelector("#menu-button")
const menuLinks = document.querySelector('#nav-links')

menuButton.addEventListener("click", toggleMobileMenu) 

function toggleMobileMenu() {
    menuLinks.classList.toggle('hidden')
}
