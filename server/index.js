const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// generate random fortune
app.get("/api/fortune/", (req, res) => {

  const fortunes = ["You will receive good news today!",
                    "You will become great if you believe in yourself",
                    "Now is the time to try something new",
                    "Wealth awaits you very soon",
                    "Your ability for accomplishment will follow with success"]

  let fortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[fortuneIndex];

  res.status(200).send(randomFortune)


})

// generate a random reminder

app.get("/api/reminder/", (req, res) => {

  const reminders = ["Water your plants",
                     "Don't skip breakfast",
                     "Check the mail",
                     "Feed the animals"]

  let reminderIndex = Math.floor(Math.random() * reminders.length);
  let randomReminder = reminders[reminderIndex];

  res.status(200).send(randomReminder)


})

// generate a random quote

app.get("/api/quote/", (req, res) => {

  const quotes = ["Life is 10% of what happens to you and 90% how you react to it. -Charles R. Swindoll",
                  "Aim for the moon. If you miss, you may hit a star. -W. Clement Stone",
                  "Success is a journey not a destination. -Ben Sweetland"]

  let quoteIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[quoteIndex];

  res.status(200).send(randomQuote)


})

// generate a random emotion

app.get("/api/emoticon/", (req, res) => {

  const emoticons = [":)", ":D", ":O", ":P"]

  let emoticonIndex = Math.floor(Math.random() * emoticons.length);
  let randomEmoticon = emoticons[emoticonIndex];

  res.status(200).send(randomEmoticon)


})



app.listen(4000, () => console.log("Server running on 4000"));
