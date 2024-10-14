fetch('codingprojects.json')
    .then((res) => {
        return res.json() 
    })
    .then((data) => {
        const codingProjects = document.querySelector('#codingProjects')
        
        data.project.forEach((project) => {
            codingProjects.innerHTML += `
                <div class="codingPortfolio">
                    <h3>${project.name}</h3>
                    <p class="desc">${project.description}</p>
                    <img class="image" src="${project.img}" alt="blank placeholder image"/>
                    <a href="${project.githublink}" target="_blank">View on GitHub</a>
                    <a href="${project.livelink}" target="_blank">Live Demo</a>
                </div>
            `
        })

    })