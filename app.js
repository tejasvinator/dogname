const form = document.getElementById('form1');
const grade = document.querySelector('.grade');

form.addEventListener('submit', e => {
    e.preventDefault();

    age = parseInt(document.querySelector('input[name = "age"]:checked').value);
    snack = parseInt(document.querySelector('input[name = "snack"]:checked').value);
    build = parseInt(document.querySelector('input[name = "build"]:checked').value);
    activity = parseInt(document.querySelector('input[name = "activity"]:checked').value);
    
    
    result = age + snack + build + activity;
    
 
    
 
 grading = [
    {score:0, name: "Abracadabra", feedback:"Kind of funny, especially if you like magic.", image: "images/dog8.jfif"},
    {score:10, name: "Ammo", feedback:"For a dog so tough you don’t need a weapon to defend yourself?", image: "images/dog13.jfif"},
    {score:20, name: "Bogart", feedback:"The original tough guy, and what a cool name", image: "images/dog12.jfif"},
    {score:30, name: "Buffy", feedback:"The Vampire Slayer?", image: "images/dog3.jfif"},
    {score:40, name: "The Notorious D.O.G", feedback:"Big Dog with a kind heart.", image: "images/dog9.jfif"},
    {score:50, name: "Bubba", feedback:"For your big ol’ boy.", image: "images/dog5.jfif"},
    {score:60, name: "Pumba", feedback:"Hakuna Matata!", image: "images/dog10.jfif"},
    {score:70, name: "Bones/ Bonia", feedback:"Bones (or Señorita Bonita) is a fun name for dog that's fun to have in your life!", image: "images/dog14.jpg"},
    {score:80, name: "Chew Barka", feedback:"For the Star Wars lovers!", image: "images/dog6.jfif"},
    {score:90, name: "Charlie Brown", feedback:"Who doesn't love Charlie Brown?", image: "images/dog4.jfif"},
    {score:100, name: "Bonnie Parker", feedback:"As in Bonnie & Clyde!", image: "images/dog2.jfif"},
    {score:110, name: "Yoda", feedback:"For the Old & Wise dog.", image: "images/dog11.jfif"},
    {score:120, name: "50 Scent", feedback:"If your dog likes to Rap!", image: "images/dog7.jfif"}
    ];
   
for(i=0; i<grading.length; i++) {
 if(result === grading[i].score) {
 result2 = grading[i].name + "<br />" + grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
   }
   }

grade.classList.remove('d-none');
document.getElementById("grade2").innerHTML = result2; 
 
})

