var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Family Book","Blue - Pet bird", "Robert - Father", "jackuline - Mother", "Cyrus - Brother", "Sherly - Sister"];

var age = [1, 46, 42, 2, 11]

age.sort();


age.reverse;

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is:", max_number)"

    */

    var max_number = Math.max.apply(Math, age);
    console.log("The highest age is:46", max_number  );

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
            "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.min.apply(Math, age );
    console.log("The lowest age is:1", min_number );
}