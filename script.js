document.getElementById("opporunityForm").addEventListener('submit',function(e){e.preventDefault();
const name=document.getElementById('name').value .trim();
const email=document.getElementById('email').value .trim();
const contact=document.getElementById('contact').value .trim();
const country=document.getElementById('country').value .trim();
const city=document.getElementById('city').value .trim();
const interest=document.getElementById('interest').value .trim();
const confirmation=document.getElementById('confirmationMessage');
if(name &&email && contact && country && city &&interest){
    //you can add code here to send data to a backend via fetch/AJAX 
    confirmation.classList.remove("hidden");
    //optionally reset form
    this.reset();
}else{
    alert('Please fill in all Fields.');
}
});