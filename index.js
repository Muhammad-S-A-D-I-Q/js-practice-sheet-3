
document.write("<h3>Q Task 1  Sentence Capitalization</h3>");
function sentence(){
    var userSentence = prompt("Task 1 Enter the Sentence to capitalize !");
    var sentence =userSentence.split(" ");
    var capitalizeSentence = [];

    for(var i = 0;i < sentence.length;i++){
        var word = sentence[i]
        var capitalizeWord = word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
        capitalizeSentence.push(capitalizeWord);
    }
    return capitalizeSentence.join(" ")
}
document.write(sentence());

document.write("</br></br>");
document.write("<h3>Q Task 2  String Truncation</h3>");


function truncateString() {
    var userString = prompt("Task 2 Enter a long string:");
    var maxLength = 100;

    if (userString.length >= maxLength) {
        var truncatedString = userString.slice(0, maxLength) + "...";
        document.write("Truncated String: " + truncatedString + "</br>" +"Original String: " + userString);
    } else {
        document.write("Original String: " + userString);
    }
}

truncateString();


document.write("</br></br>");
document.write("<h3>Q Task 3 String Search</h3>");

function searchWord(){
    var paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptatum fugiat nemo sunt dolorem dolore, aliquam unde repellendus possimus, nostrum commodi officia aspernatur? Corporis iusto sapiente blanditiis obcaecati quaerat ullam.";
    var searchWord = prompt("Task 3 search word!"+"\n"+"the paragraph is lorem");
    var index = paragraph.indexOf(searchWord);
    if(searchWord === ""){
        document.write("The input is empty");
       } else {
    if (index !== -1){
            document.write("The index of word "+index+" and the word is "+searchWord);
    }else{
        document.write("The word "+searchWord+" is not found !");
    }
}
   

}
searchWord();




document.write("</br></br>");
document.write("<h3>Q Task  4: Character Count</h3>");

function count(){
    var userSentences = prompt("Task 4 Enter a sentence to count a specific character !");
    var target = prompt("Task 4 Enter the specific character that you want to count !");
    var count = 0 ;
   

    
    for(var i = 0 ; i < userSentences.length ; i++)
        if(userSentences.charAt(i) === target){

            count++

        }
   

    document.write("The specific character appears " + count + " times.");
}

count();


document.write("</br></br>");
document.write("<h3>Q Task  5: Word Replacement</h3>");



function replaceSentence(){
    
    var sentence = "The [noun] is adjective"
    var userNoun = prompt("Task 5 Enter noun");
    var userAdjective = prompt("Task 5 Enter Adjective");
    var replace = sentence
    .replace("[noun]" , userNoun)
    .replace("adjective" , userAdjective)
    
    document.write(replace);

}


replaceSentence()




document.write("</br></br>");
document.write("<h3>Q Task 6:Calculate the Area of a Circle</h3>");

function calculateRadius() {
         var radius = prompt("Task 6 Enter the radius of circle !");
         var π = 3.14159
         var area = π * radius ^ 2
         document.write("The Area of circle is "+area)
}
calculateRadius();





document.write("</br></br>");
document.write("<h3>Q Task 7: Temperature Conversion</h3>");

function Temperature(){
    var temperature = parseFloat(prompt("Task 7 Enter a temperature in celsius"));

    var round = Math.round(temperature);
    var roundUp = Math.ceil(temperature);
    var roundDown = Math.floor(temperature);

    document.write("Original Temperature "+temperature+" °C<br>" );
    document.write("Rounded Temperature "+round+" °C<br>");
    document.write("Round Up Temperature "+roundUp+" °C<br>");
    document.write("Round Down Temperature "+roundDown+" °C<br>");


}

Temperature()






document.write("</br></br>");
document.write("<h3>Q Task 8: Discount Calculator</h3>");

function discount(){

   var userInput = parseFloat(prompt("Task8 Enter the original price of an item ..."));

   if(userInput !== "" ){
    var randomNumber = Math.floor( Math.random() * 41 ) + 10;
    var finalPrice = userInput - (userInput * (randomNumber / 100) )
    
    document.write("Original price :"+userInput+"</br>");
    document.write("Discount Percentage :"+randomNumber+"%</br>");
    document.write("Final price :"+finalPrice.toFixed(2));

   }else {
    document.write("Enter the price !")
   }



}

discount()



document.write("</br></br>");
document.write("<h3>Q Task 9:  Number to Currency</h3>");

function formatCurrency() {
    var moneyAmount = 12345.6711;
    var formattedCurrency = "$" + moneyAmount.toFixed(2);

    document.write("Formatted Currency: " + formattedCurrency);
}

formatCurrency();




document.write("</br></br>");
document.write("<h3>Q Task 10: Array Sorting</h3>");



function sort(){
    var fruits = ["Banana", "Mango", "Apple", "Grapes", "Cherry", "Kiwi"];
    fruits.sort();
    document.write("Sorted Array: " + fruits.join(", "));
}

sort();


document.write("");
document.write("");
document.write("");
document.write("");
document.write("");
document.write("");
document.write("");

document.write("");
document.write("");
document.write("");
