const generateTeam = (myTeam) => {
  console.log(myTeam);
  // Create an empty array to push html elements
  const generateCards = [];
  // Create functions that will return each type of employee role html data
  const generateManager = (manager) => {
    console.log(manager);
    let managerCard = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header manager">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
    generateCards.push(managerCard);
  };
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerCard = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header engineer">
           ${engineer.name} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
        `;
    generateCards.push(engineerCard);
  };
  const generateIntern = (intern) => {
    console.log(intern);
    let internCard = ` 
        <div class="card" style="width: 18rem;">
            <div class="card-header intern">
           ${intern.name} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
    generateCards.push(internCard);
  };

  // this conditional will loop to choose exactly which employee role should be generate
  for (let i = 0; i < myTeam.length; i++) {
    if (myTeam[i].getRole() === "Manager") {
      generateManager(myTeam[i]);
    }
    if (myTeam[i].getRole() === "Engineer") {
      generateEngineer(myTeam[i]);
    }
    if (myTeam[i].getRole() === "Intern") {
      generateIntern(myTeam[i]);
    }
  }

  // this methods will join all the HTML blocks
  return generateCards.join("");
};
// export function to generate entire page
module.exports = (myTeam) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generateTeam(myTeam)} </main>
     
</body>
</html>
    `;
};
