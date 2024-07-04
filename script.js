function isVowle(char) {
  if (char == "a" || char == "e" || char == "o" || char == "u" || char == "i")
    return true;
  return false;
}

function addToHTML(docID, text) {
  doc = document.getElementById(docID);
  // src = document.getElementById(sourceID);
  doc.innerHTML = text;
}

function fun1() {
  var number = prompt("Enter number");
  addToHTML("answer", ("number choosen is " + number));
}

function fun2() {
  var number = prompt("Enter number");
  var ans = ""
  if (number % 3 == 0 || number % 4 == 0)
    ans = "number choosen is " + number + " is divided by 3 or 4";
  else ans = "number choosen is " + number + " is not divided by 3 or 4";
  addToHTML("answer", ans);
}

function fun3() {
  var number1 = prompt("Enter first number");
  var number2 = prompt("Enter second number");
  var ans = Math.max(number1, number2);
//   alert("Max number is : " + ans);
  addToHTML("answer", ans);
}

function fun4() {
  var number = prompt("Enter number");
  var ans;
  if (number > 0) {
    // ans = "positive";
    alert("positive");
  } else {
    // alert("negative");
    ans = "negative";
  }
  addToHTML("answer", ans);
}
function fun5() {
  var ans;
  for (var i = 0; i < 3; i++) {
    var number = prompt("Enter number " + (i + 1));
    if (i == 0) ans = number;
    else ans = Math.max(ans, number);
  }
//   alert("Max number is : " + ans);
  addToHTML("answer", ans);
}

function fun6() {
  var number = prompt("Enter number");
  var ans;
  if (number % 2 == 0) ans = "Even number";
  else ans = "Odd number";
  
  addToHTML("answer", number);
}
function fun7() {
  var char = prompt("Enter character");
  var ans;
  if (isVowle(char)) ans = "character is vowel";
  else ans = "character is not vowel";

  
  addToHTML("answer", ans);
}
function fun8() {
  var number = prompt("Enter number");
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  var ans = "";
  if (way == "a" || way == "alert") for (var i = 1; i <= number; i++) alert(i);
  else if (way == "c" || way == "container")
    for (var i = 1; i <= number; i++) console.log(i);
  else {
    for (var i = 1; i <= number; i++) {
      ans += i.toString() + " ";
    }
    addToHTML("answer", ans);
  }
}
function fun9() {
  var number = prompt("Enter number");
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  var ans = "";
  if (way == "a" || way == "alert")
    for (var i = 1; i <= 12; i++) {
      alert(`${i} * ${number} = ${i * number}`);
    }
  else if (way == "c" || way == "container")
    for (var i = 1; i <= 12; i++) {
      console.log(`${i} * ${number} = ${i * number}`);
    }
  else {
    for (var i = 1; i <= number; i++) {
      var mult = `| ${i} * ${number} = ${i * number} |`;
      ans += mult;
    }
    addToHTML("answer", ans);
  }
}

function fun10() {
  var number = prompt("Enter number");
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  var ans = "";
  if (way == "a" || way == "alert")
    for (var i = 2; i <= number; i += 2) {
      alert(i);
    }
  else if (way == "c" || way == "container")
    for (var i = 2; i <= number; i += 2) {
      console.log(i);
    }
  else {
    for (var i = 2; i <= number; i += 2) {
      ans += i.toString() + " ";
    }
    addToHTML("answer", ans);
  }
}

function fun11() {
  var base = prompt("Enter base");
  var exponent = prompt("Enter exponent");
  var ans = Math.pow(base, exponent);
  
  addToHTML("answer", ans);
}

function fun12() {
  var total = 0;
  var ans = "";
  for (var i = 1; i <= 5; i++) {
    var price = prompt("Enter price of item " + i);
    total += Number(price);
  }
//   alert(`total is: ${total}`);
//   alert(`Average is: ${total / 500}`);
//   alert(`Percentage is: ${(total / 500) * 100}`);
  ans = `Total: ${total} , Average is: ${total / 500} , Percentage is: ${
    (total / 500) * 100
  }`;
  addToHTML("answer", ans);
}
function fun13() {
  var month = prompt("Enter Month");
  var numberOfDays = new Date(2024, month, 0).getDate();
  addToHTML("answer", numberOfDays);
}
function fun14() {
  var physics = Number(prompt("Enter Physics mark"));
  var chemistry = Number(prompt("Enter Chemistry mark"));
  var biology = Number(prompt("Enter Biology mark"));
  var mathematics = Number(prompt("Enter Mathematics mark"));
  var Computer = Number(prompt("Enter Computer mark"));
  var ans = `Percentage of grades is ${
    (physics + chemistry + biology + mathematics + Computer) / 5
  }`;
  
  addToHTML("answer", ans);
}
function fun15() {
  var choose = prompt(` 
choose number
1 -> Write a program to print total number of days in month
2 -> Write a program to check whether an alphabet is vowel or consonant
3 -> Write a program to find maximum between two numbers
4 -> Write a program to check whether a number is even or odd
5 -> Write a program to check whether a number is positive or negative or zero
6 -> Write a program to create Simple Calculator
`);
  switch (Number(choose)) {
    case 1:
      fun13();
      break;
    case 2:
      fun7();
      break;
    case 3:
      fun3();
      break;
    case 4:
      fun6();
      break;
    case 5:
      fun4();
      break;
    case 6:
      var number1 = Number(prompt("Enter number 1"));
      var number2 = Number(prompt("Enter number 2"));
      var op = prompt("Enter operator needed");
      var ans = "";
      switch (op) {
        case "+":
          ans = `${number1} + ${number2} = ${number1 + number2} `;
          break;
        case "-":
          ans = `${number1} - ${number2} = ${number1 - number2} `;
          break;
        case "*":
          ans = `${number1} * ${number2} = ${number1 * number2} `;
          break;
        case "/":
          ans = `${number1} / ${number2} = ${number1 / number2} `;
          break;
      }
      
      addToHTML("answer", ans);
      break;
  }
}

function fun16() {
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  var ans = "";
  if (way == "a" || way == "alert")
    for (var i = 1; i <= 10; i++) {
      alert(i);
    }
  else if (way == "c" || way == "container")
    for (var i = 1; i <= 10; i++) {
      console.log(i);
    }
  else {
    for (var i = 1; i <= 10; i++) {
      ans += i.toString() + " ";
    }
    addToHTML("answer", ans);
  }
}

function fun17() {
  var sum = 0;
  for (var i = 1; i <= 10; i++) {
    sum += i;
  }
  addToHTML("answer", sum);
}

function fun18() {
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  var ans = "";
  if (way == "a" || way == "alert")
    for (var i = 1; i <= 20; i++) {
      if (i % 2 == 0) alert(i);
    }
  else if (way == "c" || way == "container")
    for (var i = 1; i <= 20; i++) {
      if (i % 2 == 0) console.log(i);
    }
  else {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 0) ans += i.toString() + " ";
      }
      addToHTML("answer", ans);
  }
}

function fun19() {
  var number = prompt("Enter number to calc factorial:");
  var factorial = 1;
  for (var i = 2; i <= number; i++) factorial *= i;
  var ans =`factorial of ${number} is ${factorial}` 
  
  addToHTML("answer", ans);
}

function fun20() {
  var text = prompt("Enter string");
  var oldText = text;
  var textArray = text.split("");
  var ans = ""
  for (var i = 0, j = text.length - 1; i < j; i++, j--) {
    var tmp = textArray[i];
    console.log(tmp);
    textArray[i] = textArray[j];
    textArray[j] = tmp;
  }
  text = textArray.join("");
  ans = `old text is ${oldText} swaped to ${text}`
  
  addToHTML("answer", ans);

}

function fun21() {
  var length = prompt("Enter # of elements");
  var array = [];
  for (var i = 0; i < length; i++) {
    var number = prompt("Enter number " + (i + 1));
    array[i] = number;
  }
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  if (way == "a" || way == "alert")
    for (var i = 0; i < array.length; i++) {
      alert(array[i]);
    }
  else if (way == "c" || way == "container")
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  else {
    var ans = ""
    for (var i = 0; i < array.length; i++) {
        ans+=i.toString() + " ";
      }
      addToHTML("answer", ans);

}
}
function fun22() {
  var length = prompt("Enter # of elements");
  var array = [];
  for (var i = 0; i < length; i++) {
    var number = prompt("Enter number " + (i + 1));
    array[i] = number;
  }
  var ans = array[0];
  for (var i = 1; i < array.length; i++) {
    ans = Math.max(ans, array[i]);
  }
  alert(`max number is ${ans}`);
  addToHTML("answer", ans);

}
function fun23() {
  var number = prompt("Enter number ");
  var way = prompt("alert or console or on HTML? enter (a/c/h)");
  if (way == "a" || way == "alert")
    for (var i = 1; i <= 10; i++) {
      alert(`${i} * ${number} = ${number * i}`);
    }
  else if (way == "c" || way == "container")
    for (var i = 1; i <= 10; i++) {
      console.log(`${i} * ${number} = ${number * i}`);
    }
  else {
    var ans = ""
    for (var i = 1; i <= 10; i++) {
       ans += `${i} * ${number} = ${number * i}`;
      }
      addToHTML("answer", ans);

  }
}

function fun24() {
  var string = prompt("Enter Text");
  var ans = 0;
  var output = ""
  for (var i = 0; i < string.length; i++) {
    if (isVowle(string[i])) {
      ans++;
    }
  }
  output =`number of vowels is ${ans}`; 
  alert(output);
  addToHTML("answer", output);
}
function isPrime(number) {
  for (var i = number - 1; i > 1; i--) {
    if (number % i == 0) return false;
  }
  return true;
}
function fun25() {
    var ans = ""
  var number = Number(prompt("Enter number "));
  if (isPrime(number)) ans = `${number} is prime`;
  else ans = `${number} is not prime`;

  addToHTML("answer", ans);

}
