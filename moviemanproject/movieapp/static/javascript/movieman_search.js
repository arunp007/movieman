function search(){
    var search = document.getElementById('text')
    if(search.value == ""){
        document.getElementById(alert("Please Enter The Movie Name In Small Letter"))
    }
     if(search.value=="the godfather" || search.value=="The godfather" || search.value=="THE GODFATHER"){
        window.open("https://movieman123.herokuapp.com/movieapp/thegodfather")
        return true
     }
     if(search.value=="the dark knight" || search.value=="The dark knight" || search.value=="THE DARK KNIGHT"){
        window.open("https://movieman123.herokuapp.com/movieapp/thedarkknight")
        return true
     }
     if(search.value=="inception" || search.value=="Inception" || search.value=="INCEPTION"){
        window.open("https://movieman123.herokuapp.com/movieapp/inception")
        return true
     }
     if(search.value=="seven" || search.value=="Seven" || search.value=="SEVEN"){
        window.open("https://movieman123.herokuapp.com/movieapp/seven")
        return true
     }
     if(search.value=="interstellar" || search.value=="Interstellar" || search.value=="INTERSTELLAR"){
        window.open("https://movieman123.herokuapp.com/movieapp/interstellar")
        return true
     }
     if(search.value=="gladiator" || search.value=="Gladiator" || search.value=="GLADIATOR"){
        window.open("https://movieman123.herokuapp.com/movieapp/gladiator")
        return true
     }
     if(search.value=="memento" || search.value=="Memento" || search.value=="MEMENTO"){
        window.open("https://movieman123.herokuapp.com/movieapp/memento")
        return true
     }
     if(search.value=="joker" || search.value=="Joker" || search.value=="JOKER"){
        window.open("https://movieman123.herokuapp.com/movieapp/joker")
        return true
     }
     if(search.value=="1917"){
        window.open("https://movieman123.herokuapp.com/movieapp/ninteenseventeen")
        return true
     }
     if(search.value=="gandhi" || search.value=="Gandhi" || search.value=="GANDHI"){
        window.open("https://movieman123.herokuapp.com/movieapp/gandhi")
        return true
     }
     if(search.value=="logan" || search.value=="Logan" || search.value=="LOGAN"){
        window.open("https://movieman123.herokuapp.com/movieapp/logan")
        return true
     }
     if(search.value=="hacksawridge" || search.value=="Hacksawridge" || search.value=="HACKSAWRIDGE"){
        window.open("https://movieman123.herokuapp.com/movieapp/hacksawridge")
        return true
     }
     if(search.value=="the pursuit of happyness" || search.value=="The pursuit of happyness" || search.value=="THE PURSUIT OF HAPPYNESS"){
        window.open("https://movieman123.herokuapp.com/movieapp/thepursuitofhappyness")
        return true
     }
     if(search.value=="the revenant" || search.value=="The revenant" || search.value=="THE REVENANT"){
        window.open("https://movieman123.herokuapp.com/movieapp/revenant")
        return true
     }
     if(search.value=="sanandreas" || search.value=="Sanandreas" || search.value=="SANANDREAS"){
        window.open("https://movieman123.herokuapp.com/movieapp/sanandreas")
        return true
     }
     else{
        document.getElementById(alert('Please Enter A Valid Movie Name'))
        return false
     }

     
 }