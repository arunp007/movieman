function search(){
    var search = document.getElementById('text')
    if(search.value == ""){
        document.getElementById(alert("Please Enter The Movie Name In Small Letter"))
    }
     if(search.value=="the godfather" || search.value=="The godfather" || search.value=="THE GODFATHER"){
        window.open("https://arun955.w3spaces.com/thegodfather.html")
        return true
     }
     if(search.value=="the dark knight" || search.value=="The dark knight" || search.value=="THE DARK KNIGHT"){
        window.open("https://arun955.w3spaces.com/thedarkknight.html")
        return true
     }
     if(search.value=="inception" || search.value=="Inception" || search.value=="INCEPTION"){
        window.open("https://arun955.w3spaces.com/inception.html")
        return true
     }
     if(search.value=="seven" || search.value=="Seven" || search.value=="SEVEN"){
        window.open("https://arun955.w3spaces.com/seven.html")
        return true
     }
     if(search.value=="interstellar" || search.value=="Interstellar" || search.value=="INTERSTELLAR"){
        window.open("https://arun955.w3spaces.com/interstellar.html")
        return true
     }
     if(search.value=="gladiator" || search.value=="Gladiator" || search.value=="GLADIATOR"){
        window.open("https://arun955.w3spaces.com/gladiator.html")
        return true
     }
     if(search.value=="memento" || search.value=="Memento" || search.value=="MEMENTO"){
        window.open("https://arun955.w3spaces.com/memento.html")
        return true
     }
     if(search.value=="joker" || search.value=="Joker" || search.value=="JOKER"){
        window.open("https://arun955.w3spaces.com/joker.html")
        return true
     }
     if(search.value=="1917"){
        window.open("https://arun955.w3spaces.com/1917.html")
        return true
     }
     if(search.value=="gandhi" || search.value=="Gandhi" || search.value=="GANDHI"){
        window.open("https://arun955.w3spaces.com/gandhi.html")
        return true
     }
     if(search.value=="logan" || search.value=="Logan" || search.value=="LOGAN"){
        window.open("https://arun955.w3spaces.com/logan.html")
        return true
     }
     if(search.value=="hacksawridge" || search.value=="Hacksawridge" || search.value=="HACKSAWRIDGE"){
        window.open("https://arun955.w3spaces.com/hacksawridge.html")
        return true
     }
     if(search.value=="the pursuit of happyness" || search.value=="The pursuit of happyness" || search.value=="THE PURSUIT OF HAPPYNESS"){
        window.open("https://arun955.w3spaces.com/thepursuitofhappyness.html")
        return true
     }
     if(search.value=="the revenant" || search.value=="The revenant" || search.value=="THE REVENANT"){
        window.open("https://arun955.w3spaces.com/revenant.html")
        return true
     }
     if(search.value=="sanandreas" || search.value=="Sanandreas" || search.value=="SANANDREAS"){
        window.open("https://arun955.w3spaces.com/sanandreas.html")
        return true
     }
     else{
        document.getElementById(alert('Please Enter A Valid Movie Name'))
        return false
     }

     
 }