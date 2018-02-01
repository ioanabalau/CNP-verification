function Validate() {
    var cnp = document.getElementById("SSN").value;
    var AnDeclarat = document.getElementById("an").value;
    var LunaDeclarata = document.getElementById("luna").value;
    var ZiDeclarata = document.getElementById("zi").value;
    var AnCnp = cnp.substr(1, 2);
    var LunaCnp = cnp.substr(3, 2);
    var ZiCnp = cnp.substr(5, 2);
    var verificare = true;

    if (isNaN(cnp)) {
        verificare = false;
        alert("SSN field must contain digits");
    }
    if (isNaN(AnDeclarat)) {
        verificare = false; 
        alert("Year field must contain digits");
    }
    if (isNaN(LunaDeclarata)) {
        verificare = false; 
        alert("Month field must contain digits.");
    }
    if (isNaN(ZiDeclarata)) {
        verificare = false; 
        alert("Birthday field must contain digits.");
    }
    if (cnp.length < 13) {
       verificare = false; 
        alert("SSN must have 13 digits");
    }
    if (AnDeclarat < 1 || AnDeclarat > 2016) {
        verificare = false; 
        alert("Year must be between 1 and 2016");
    }
    if (LunaDeclarata < 1 || LunaDeclarata > 12) {
        verificare = false; 
        alert("Month must be between 1 and 12");
    }

    if (ZiDeclarata < 1 || ZiDeclarata > 31) {
        verificare = false; 
        alert("Birthday must be between 1 and 31");
    }
    if (AnDeclarat.length == 1) {
        AnDeclarat = "0" + AnDeclarat;
    }

    if (AnDeclarat.length == 3) {
        AnDeclarat = AnDeclarat.substr(1, 2);
    }
    if (AnDeclarat.length == 4) {
        AnDeclarat = AnDeclarat.substr(2, 2);
    }
    if (AnDeclarat != AnCnp) {
        verificare = false; 
        alert("Year does not match SSN");
    }
    if (LunaDeclarata.length == 1) {
        LunaDeclarata = "0" + LunaDeclarata;
    }

    if (LunaDeclarata != LunaCnp) {
        verificare = false; 
        alert("Month does not match SSN");
    }
    if (ZiDeclarata.length == 1) {
        ZiDeclarata = "0" + ZiDeclarata;
    }
    if (ZiDeclarata != ZiCnp) {
        verificare = false; 
        alert("Birthday does not match SSN");
    }
    if (verificare == true) {
        alert("Data introduced is correct!");
    }
   

}
