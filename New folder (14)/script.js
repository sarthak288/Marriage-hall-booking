document.getElementById("booking-form").addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById("name").Value;
    const email=document.getElementById("email").Value;
    const phone=document.getElementById("phone").Value;
    const date=document.getElementById("date").Value;
    const venue=document.getElementById("venue").Value;

    alert('Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nVenue: ${venue}');

})