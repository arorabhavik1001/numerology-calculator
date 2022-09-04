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

var remedyDatabase = {
  1: ["Do surya-namaskar daily", "Keep a Red swastik in East zone"],
  2: ["Drink Water in Silver Glass", "Keep a double mountain photo in South west"],
  3: ["Apply Kesar tilak daily", "Hang Gautam Budh Pic in West"],
  4: ["Wear 5 Mukhi Rudraksh", "Keep small bag of coins in South-East"],
  5: ["Wear Green color clothes more often", "Tie a green color thread on any of the hands"],
  6: ["Keep Money plant in North", "Wear Gold color bangle/bracelet in right hand"],
  7: ["Feed 3 dogs daily", "Wear Gold Color bangle/Bracelet in right hand"],
  8: ["Always Keep Blue color hanky but do not use it", "Daily 45-60 minutes of physical workout"],
  9: ["Tie red color thread on right hand", "Donate red lentils on Tuesday in mandir"],
}

var Database = {
  "1": {positives:['High Energy Level','Will Power','New Opportunities','New Relationships','Marriage','New and Productive Ideas','Transfers','Freedom','Action-Oriented','Multi Income Sources','Ambition and Leadership'], negatives:['Violent','Argumentative','Reckless','Impatient','Suffering and Distrustful'], enhanceMonth:['Begin Something New','Promote Your Original Ideas','Act On Your Intuition','This Is A Good Time To Ask For A Favor','Ask Your Employer For A Rise','Apply For New Position','Sell Yourself','Success Depends On Your Initiative','Be Independent','Aggressive And Enthusiastic','Make Quick Decisions',]},
  "2": {positives:['Friendly','Romantic','Cooperative','Diplomatic','Modest','Research','Tactful and Sensitive'], negatives:['Moody','Melodramatic','Emotional','Imbalance','Deceitful','Health Problems And Nervousness',], enhanceMonth:['Be a Peacemaker','This Is a Good Time to Collect What Is Due To You','Be Sure To Avoid Any Arguments As Nothing Will Be Gained Through It',"Try to See the Other Man's Point Of View',this may pay Big Dividends.",'Be Willing to Listen Instead Of Talking; follow instead of taking The Lead.','Be Receptive, Tolerant and Good-Natured','Radiating Peace and Harmony.',]},
  "3": {positives:['Attractive','Imaginative','Expressive','Travelling','Happy','Inspiring','Making New Friends and Meeting Old Friends'], negatives:['Ego','Gossips','Scattered','Energy','Spendthrift'], enhanceMonth:['Entertain Your Friends or Business Associates','Be Lovely and Happy and So Make Others Joyful','Exercise Your Sense of Humor','Express Yourself Creatively Either in Writing Acting Painting or Music','Take Things as They Come and Like It','Avoid Scattering Your Forces']},
  "4": {positives:['Hardworking','Goal Oriented','Practical','Methodical and Dependable'], negatives:['Low Energy Level','Pressure','Rigid','Slow and Easily Frustrated'], enhanceMonth:['Concentrate On And Organize Your Work And Exert Every Effort To Do It Systematically And Economically According To Schedule','Devote The Time To Routine And Detail Work','Clamp down on yourself',"Don't Start Anything New",'This Is Not an Auspicious Time to Ask Favors or Deal With the Opposite Gender']},
  "5": {positives:['Social','Progress','Promotions','Adaptable','Productive','Versatile','Freedom','Loving and Flexible'], negatives:[ 'Detached','Unpredictable And Unreliable','Projects or Relationships Established At This Time Will Be Long Lasting','Similarly The Disputes Occurred This Time Turn Into Court Cases'], enhanceMonth:['Radiate Enthusiasm By Promoting New Ideas. Will Be Contagious and Your Customer Will Be Availing Listener','This Is An Auspicious Time To Deal With The Opposite Gender Since You Will Be Attracted To Them By Time','This Is A Good Time To Travel Buy Or Sell Commodities','Take A Chance On Anything New But Follow Your Hunch']},
  "6": {positives:[ 'Love','Marriage','Romantic','Artistic','Social','Loving','Respective','Concerned and Balanced'], negatives:[ 'Dislike to Adjustability','Unwilling Differences Selfish and Unstable'], enhanceMonth:['Assume Responsibilities Graciously','Improve Conditions At Home in Office and Community.','Harmonize And Adjust For The Comfort And Happiness Of Everybody.','Give Advice Freely But Only When Asked For','Do Not Issue Orders.','Organize Educational or Community Projects.','This Is A Good Time To Buy Build Or Lease A Home.','Avoid A Negative Tendency To Argue.','This Is A Good Time For A Wedding']},
  "7": {positives:['Perfectionist','Financial','Stability','Intuitive','Meditative','Charming','Research and Mid Of the Month Is Favorable.'], negatives:['Short Tempered','Reserved','Doubtful And Jealous', 'Avoid Starting Something New.'], enhanceMonth:['Perfect Everything You Are Doing Put On The Finishing Touch', 'Spend Part Of The Time Alone','Rest- Relax And Concentrate','Listen To Your Voice Of Intuition','Do Not Enter into Any Partnerships on A 50/50 basis.','This Is A Good Time To Deal In Antiques, Jewelry or Perfume.','This Is A Spiritual Time And Do Not Propitious For Material Success.']},
  "8": {positives:['Authoritative','Promotions','Investments','Efficient','Respectful','Generous','Good Return from Conjectures','Profit Through Real Estate'], negatives:['Loud','Greedy and Fraudulent'], enhanceMonth:['Sign Big Contracts And Create An Atmosphere Of The Influential Business Executive.','This Is An Executive Time For Business Expansion And Growth.','Deal With Large Corporations Or Financial Institutions.','Render Service In A Big Way And You Will Reap A Rich Harvest','Use Tact Diplomacy And Keep Judgment In Organizing And Bringing Definite Plans To Completion']},
  "9": {positives:['Sympathetic','Broad-Minded','Isolated','New Friends','Pilgrimages','Forgiving'], negatives:['Careless','Permanent','Conflicts','Impulsive','Insensitive','Aloof'], enhanceMonth:['Take An Inventory Of Your Possessions Clear Up Unfinished Business And Be Ready To Start With A Clean Slate Tomorrow.','This Is A Good Time To Promote Universal Love And Brotherhood.','Find Something to Love Appreciate or Commend In Everyone.','Patch Up Your Quarrels.']},
}

function calculate(event) {
  document.getElementById("result").innerHTML = ""

  var origin_number = getOneDigit(event.target.day.value);
  var master_number = getOneDigit(`${event.target.day.value+event.target.month.value+event.target.year.value}`)
  var angel_number = getOneDigit(event.target.year.value)
  var personal_year = getOneDigit(`${event.target.day.value+event.target.month.value+new Date().getFullYear()}`)
  if(document.getElementById('gender').value=="Male") {
    angel_number = getOneDigit(11-angel_number)
  } else if(document.getElementById('gender').value=="Female") {
    angel_number = getOneDigit(angel_number+4)
  }

  var stringNums = `${origin_number}${master_number}${angel_number}${event.target.month.value}${event.target.year.value}${event.target.day.value}`
  var missingNumbers = []
  for (var i = 1; i <= 9; i++) {
    if (stringNums.indexOf(i) == -1) {
      missingNumbers.push(i);
    }
  }

  var tag6 = document.createElement("p");
  var text6 = document.createTextNode(`Origin Number: ${origin_number} | Master Number: ${master_number}`);
  tag6.appendChild(text6);
  tag6.style.textAlign = 'center'
  document.getElementById("result").appendChild(tag6)

  if (missingNumbers.length > 0) {
    var tag5 = document.createElement("h3");
    var text5 = document.createTextNode("Important Remedies");
    tag5.appendChild(text5);
    tag5.style.fontWeight = 'bold'
    tag5.style.textAlign = 'center'
    document.getElementById("result").appendChild(tag5)

    var ul1 = document.createElement("ul");
    var br = document.createElement("br");

    for(var n of missingNumbers) {
      console.log(remedyDatabase[n])
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(remedyDatabase[n][0]));
      ul1.appendChild(li);
      var li1 = document.createElement("li");
      li1.appendChild(document.createTextNode(remedyDatabase[n][1]));
      ul1.appendChild(li1);
    }

    ul1.style.textAlign = 'left'
    document.getElementById("result").appendChild(ul1)
    document.getElementById("result").appendChild(br)
  }

  var personal_month = {}
  var start = new Date(event.target.sDate.value); 
  var end = new Date(event.target.eDate.value);
  var personal_yearCal = personal_year
  var latestYear = new Date().getFullYear()
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var pMonthHeads = []

  var loop = new Date(start);
  while(loop <= end){
    if(latestYear!=new Date(loop).getFullYear()) {
      personal_yearCal = getOneDigit(`${event.target.day.value+event.target.month.value+new Date(loop).getFullYear()}`)
    }
    personal_month[`${monthNames[loop.getMonth()]} ${loop.getFullYear()}`] = getOneDigit(personal_yearCal + loop.getMonth() +1)
    pMonthHeads.push(`${monthNames[loop.getMonth()]} ${loop.getFullYear()}`)
    latestYear = new Date(loop).getFullYear();
    var newDate = loop.setMonth(loop.getMonth() + 1);
    loop = new Date(newDate);
    console.log(personal_month)
  }

  var tag4 = document.createElement("h2");
  var text4 = document.createTextNode("Predictions");
  tag4.appendChild(text4);
  tag4.style.fontWeight = 'bold'
  tag4.style.textAlign = 'center'
  document.getElementById("result").appendChild(tag4)

  for(var p of pMonthHeads) {
    var br = document.createElement("br");
    var tag = document.createElement("p");
    var text = document.createTextNode(p);
    tag.appendChild(text);
    tag.style.fontWeight = 'bold'
    tag.style.textAlign = 'center'
    document.getElementById("result").appendChild(tag)
    
    var tag1 = document.createElement("p");
    var text1 = document.createTextNode(`Positives: ` + Database[personal_month[p]].positives);
    tag1.appendChild(text1);
    document.getElementById("result").appendChild(tag1)

    var tag2 = document.createElement("p");
    var text2 = document.createTextNode(`Negatives: ` + Database[personal_month[p]].negatives);
    tag2.appendChild(text2);
    document.getElementById("result").appendChild(tag2)

    var tag3 = document.createElement("p");
    var text3 = document.createTextNode(`Tips to enhance this month: `);
    tag3.appendChild(text3);
    tag3.style.fontWeight = 'bold'
    tag3.style.marginTop = '10px'
    document.getElementById("result").appendChild(tag3)
    
    var ul = document.createElement("ul");
    for(var e of Database[personal_month[p]].enhanceMonth) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(e));
      ul.appendChild(li);
    }
    ul.style.textAlign = 'left'
    document.getElementById("result").appendChild(ul)
    document.getElementById("result").appendChild(br)
  }

  console.log({origin_number: origin_number, master_number: master_number, angel_number:angel_number, personal_year: personal_year})
}