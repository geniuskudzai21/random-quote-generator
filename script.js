// Array of motivational and Bible quotes
const quotes = [
    {
        text: "I can do all things through Christ who strengthens me.",
        author: "Philippians 4:13"
    },
    {
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        author: "Jeremiah 29:11"
    },
    {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        author: "Proverbs 3:5-6"
    },
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        author: "Joshua 1:9"
    },
    {
        text: "The Lord is my shepherd, I shall not want.",
        author: "Psalm 23:1"
    },
    {
        text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
        author: "1 Corinthians 13:4"
    },
    {
        text: "Faith is the substance of things hoped for, the evidence of things not seen.",
        author: "Hebrews 11:1"
    },
    {
        text: "In all things God works for the good of those who love him, who have been called according to his purpose.",
        author: "Romans 8:28"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    {
        text: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author: "Helen Keller"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "The greatest wealth is to live content with little.",
        author: "Plato"
    },
    {
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        text: "A year from now you may wish you had started today.",
        author: "Karen Lamb"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "The only person you should try to be better than is the person you were yesterday.",
        author: "Anonymous"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        text: "Make each day your masterpiece.",
        author: "John Wooden"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
        author: "Anonymous"
    },
    {
        text: "The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.",
        author: "Michele Borba"
    },
    {
        text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi"
    },
    {
        text: "The man who has no imagination has no wings.",
        author: "Muhammad Ali"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        text: "The only thing worse than being blind is having sight but no vision.",
        author: "Helen Keller"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author: "Dalai Lama"
    },
    {
        text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
        author: "Brian Herbert"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    },
    {
        text: "A year from now you may wish you had started today.",
        author: "Karen Lamb"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "The only person you should try to be better than is the person you were yesterday.",
        author: "Anonymous"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        text: "Make each day your masterpiece.",
        author: "John Wooden"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
        author: "Anonymous"
    },
    {
        text: "The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.",
        author: "Michele Borba"
    },
    {
        text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi"
    },
    {
        text: "The man who has no imagination has no wings.",
        author: "Muhammad Ali"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        text: "The only thing worse than being blind is having sight but no vision.",
        author: "Helen Keller"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author: "Dalai Lama"
    },
    {
        text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
        author: "Brian Herbert"
    }
];

// List of gradient backgrounds
const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)',
    'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #f953c6 0%, #b91d73 100%)',
    'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'
];

// DOM elements
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetQuoteBtn = document.getElementById('tweet-quote');

// Current quote
let currentQuote = null;

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to get a random gradient
function getRandomGradient() {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
}

// Function to change background gradient
function changeBackgroundGradient() {
    document.body.style.background = getRandomGradient();
}

// Function to display a quote
function displayQuote(quote) {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
    currentQuote = quote;
    
    // Update tweet link
    const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
    // Change background gradient
    changeBackgroundGradient();
}

// Function to get a new quote
function getNewQuote() {
    const newQuote = getRandomQuote();
    displayQuote(newQuote);
}

// Event listeners
newQuoteBtn.addEventListener('click', getNewQuote);

// Display initial quote on page load
document.addEventListener('DOMContentLoaded', function() {
    getNewQuote();
}); 