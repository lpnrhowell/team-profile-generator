    const generateHTML = function (teamstr) {

        console.log("Inside gen html");
        return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>The"A"Team</title>
   <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Shade&display=swap" rel="stylesheet">
     <style>
       body {
           background-image: url("https://i.pinimg.com/474x/a2/64/09/a2640934ec1e60bcc2d61fbfc0574243.jpg");
           
         
           margin: 0%;
           height: 100vh;
       }

       .header {
           background-color: rgb(79, 80, 11);
           border: solid black;
           text-align: center;
           font-size: 30px;
           font-family: monospace;  
       }

       .container-body {
           display: flex;
           justify-content: space-evenly;
       }

       .card {
           background-color:rgb(126, 126, 126);
           opacity: .8;
           margin-top: 4%;
           border: solid 5px beige;
           border-radius: 100px;
           font-size: x-large;
           color: beige;
           width: 350px;
           font-family: monospace;  
       }
       .card-header{
           margin: 10%;
           text-align: center;
       }
       .card-body{
           
           font-size: 25px;
       }
       .list{
           list-style-type: none;
       }
         #titleA{
           font-size: 80px;
       }
   </style>
   
</head>
    
    <body>
   <div class=header>
    <h1>The <span id="titleA">A</span> Team</h1>
   </div>
   <div class="container-body">

         ${teamstr} 

         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`

    }

    //arr is the employee object and looking for the properties in that class
    const generateCard = function (arr) {
        //if else statement
        let roleInfo;

        if (arr.title === "Manager") {
            roleInfo = `Office Number: ${arr.officeNumber}`
        } else if (arr.title === "Engineer") {
            roleInfo = `Github: ${arr.github}`
        } else if (arr.title === "Intern") {
            roleInfo = `School: ${arr.school}`
        }

        return `<div class="card">
<div class="card-header">
    <h2>${arr.name.toUpperCase()}</h2>  
    <h2><i class="far fa-user"></i> ${arr.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul class="list">
        <li>ID:</li>
        <li>${arr.id}</li>
        <li>Email:</li>
        <li>${arr.email}</li>
        <li>${roleInfo.toUpperCase()} </li>
    </ul>
</div>
</div>`
    }

    exports.generateHTML = generateHTML
    exports.generateCard = generateCard;