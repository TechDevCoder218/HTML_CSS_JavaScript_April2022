//This script will test if a string is a palindrome

var newString = "kayak";
var nextString = "tibet"

//function to test if passed in string is a palindrome
function isPalindrome(String)
{
    var leftIndex=0;
    var rightIndex=String.length - 1;

    while(leftIndex < String.length/2)
    {
        if(String[leftIndex] !== String[rightIndex])
        {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

    return true;
}

//call isPalindrome function
if(isPalindrome(newString) == true)
{
    console.log('The string ' + newString + ' is a palindrome');
}else{
    console.log('The string ' + newString + 'is not a palindrome');
}

if(isPalindrome(nextString) == true)
{
    console.log('The string ' + nextString + ' is a palindrome');
}else{
    console.log('The string ' + nextString + ' is not a palindrome');
}