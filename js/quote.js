
//the array of elements
var arr = [
 '<p>"Resentment is like drinking poison and waiting for your enemies to die." <br/>--Nelson Mandela </p>' ,
 '<p>“So many books, so little time.” <br/>― Frank Zappa</p>' ,
 '<p>“You only live once, but if you do it right, once is enough.” <br/>-― Mae West </p>' ,
 '<p>“Be the change that you wish to see in the world.” <br/>― Mahatma Gandhi </p>' ,
 '<p>“If you tell the truth, you dont have to remember anything.” <br/>― Mark Twain </p>' ,
 '<p>“Always forgive your enemies; nothing annoys them so much.” <br/>― Oscar Wilde </p>' ,
 '<p>“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br/>― Mahatma Gandhi </p>' 

] ;

//catch the place that we display on
var quoteText =document.getElementById('quote-text');

// main function
function display(){
    //random number of array
    var i = Math.floor(Math.random() * arr.length) ;
    // push the element in it place
    quoteText.innerHTML=arr[i]
}






