function checkPalindromeNumber(number)
{
    var remainder, temp, reversedNumbe = 0;
    temp = number;
    while(number > 0)
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber*10 + remainder;
    }
   
    if(reversedNumber == temp)
    {
        console.log("The given number is Palindrome");
    }
    else
    {
        console.log("The given number is not palindrome");
    }
}

checkPalindromeNumber(2454)
