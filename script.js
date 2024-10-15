fetch('codingprojects.json')
    .then((res) => {
        return res.json() 
    })
    .then((data) => {
        const codingProjects = document.querySelector('#codingProjects')
        
        data.project.forEach((project) => {
            codingProjects.innerHTML += `
                <div class="codingPortfolio m-4 p-4 grid-container border-4 border-violet-300 rounded border-solid">
                    <h3 class = "text-lg">${project.name}</h3>
                    <p class="desc">${project.description}</p>
                    <img class="image flex justify-center py-4" src="${project.img}" alt="blank placeholder image"/>
                    <a class = "pe-4" href="${project.githublink}" target="_blank">View on GitHub</a>
                    <a class = "pe-4" href="${project.livelink}" target="_blank">Live Demo</a>
                </div>
            `
        })

    })