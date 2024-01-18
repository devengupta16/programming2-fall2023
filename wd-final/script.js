function alerts() {
   alert("Thank you for contacting us!");
}

function do_it() {
    let month = document.getElementById("month").value;
    let grade = document.getElementById("grade").value;
    let subject = document.getElementById("subject").value;
    let quiznameText = document.getElementById("quizname");
    let characterImage = document.getElementById("characterImage");

    let characterName = "Gretchen Weiners"; 
    let imageUrl = "https://akns-images.eonline.com/eol_images/Entire_Site/2023108/cr_1200x1200-231108164414-GettyImages-1193896859.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"; 
    if (month === "JAN" || month === "FEB" || month === "MAR") {
        characterName = "Cady Heron";
        imageUrl = "https://static.wikia.nocookie.net/p__/images/2/2d/Cadyheron.jpeg/revision/latest?cb=20120204191706&path-prefix=protagonist";
    } else if (month === "APR" || month === "MAY" || month === "JUN") {
        characterName = "Regina George";
        imageUrl = "https://upload.wikimedia.org/wikipedia/en/0/0f/Regina_George.jpg"; 
    } else if (grade === "12th") {
        characterName = "Karen Smith";
        imageUrl = "https://static.miraheze.org/greatcharacterswiki/3/30/KarenSmith.jpg"; 
    } else if (grade === "Not") {
        characterName = "Ms. Norbury";
        imageUrl = "https://www.thewrap.com/wp-content/uploads/2023/02/tina-fey-mean-girls.jpg"; 
    } else if (subject === "Math") {
        characterName = "Aaron Samuels";
        imageUrl = "https://static.wikia.nocookie.net/p__/images/5/56/Aaron_Samuel.jpg/revision/latest/scale-to-width/360?cb=20140323032312&path-prefix=protagonist"; 
    } else if (subject === "English") {
        characterName = "Damian Hubburd";
        imageUrl = "https://assets.mycast.io/characters/damian-hubbard-1068608-normal.jpg?1678208675"; 
    }

    
    quiznameText.innerText = "Your Mean Girls Character is: " + characterName;
    characterImage.src = imageUrl;
    characterImage.style.display = "block"; 
}
