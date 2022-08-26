function login(event) {
  if (
    event.target.email.value === "atulya.pr@numeromaster.com" &&
    event.target.password.value === "numerology9844"
  ) {
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
  } else {
    alert("wrong password");
  }
}

function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

function getOneDigit(nr) {
  let asStr = nr.toString();
  let sum = asStr.split("").reduce((a, c) => {
    a += parseInt(c);
    return a;
  }, 0);
  return sum >= 10 ? getOneDigit(sum) : sum;
}

function calculate(event) {
  var origin_number = getOneDigit(event.target.day.value);
  var master_number = getOneDigit(`${event.target.day.value+event.target.month.value+event.target.year.value}`)
  var angel_number = getOneDigit(event.target.year.value)
  var personal_year = getOneDigit(`${event.target.day.value+event.target.month.value+new Date().getFullYear()}`)
  if(document.getElementById('gender').value=="Male") {
    angel_number = getOneDigit(11-angel_number)
  } else if(document.getElementById('gender').value=="Female") {
    angel_number = getOneDigit(angel_number+4)
  }
  console.log({origin_number: origin_number, master_number: master_number, angel_number:angel_number, personal_year: personal_year})
}


var remedyDatabase = {
    "1": ["Do surya-namaskar daily", "offer water to surya daily"],
}

var Database = {
    "1": {positives:[''], negatives:[], enhanceMonth:['peachasdad', 'adsasdf']},
}