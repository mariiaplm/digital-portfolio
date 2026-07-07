// 1. const container = document.querySelector("#projects");
// 2. loop over repos
// 3. build a card for each
// 4. append it to container

//comments for myself!!!

// async labels the function as one that waits for slow things (like requests)
async function loadProjects() {
  // fetch() goes to my github address and asks for repos
  // "await" pauses until github answers, so "response" holds the real reply, not an empty IOU
  const response = await fetch("https://api.github.com/users/mariiaplm/repos");

  // The reply comes as raw text. .json() converts it into a usable JS array
  // That conversion also takes a moment, so "await" again now "repos" is my actual list

  const repos = await response.json();
  //1. Grabs the empty <div id="projects"> from HTML so there is space to put the cards
  const container = document.querySelector("#projects");
  //2. Loops through the list. Each time around, "repo" is one project from the array
  for (const repo of repos) {
    //3. Makes a brand-new empty <div> in memory (not on the page yet)
    const card = document.createElement("div");
    card.textContent = repo.name; // fills that div with this repo's name.
    //4. Attaches the finished card into the container (now appears on the page)
    container.appendChild(card);
  }
}

loadProjects();
