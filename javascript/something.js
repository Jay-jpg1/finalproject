document.addEventListener('DOMContentLoaded', () => {
    const journalForm = document.getElementById('journalForm');
    const entryList = document.getElementById('entryList');
  
    // Load entries from localStorage
    function loadEntries() {
      const entries = JSON.parse(localStorage.getItem('entries')) || [];
      entryList.innerHTML = ''; // Clear existing content
  
      entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
          <h3>${entry.title}</h3>
          <small>${entry.date}</small>
          <p>${entry.content}</p>
          <button onclick="deleteEntry(${index})">Delete</button>
        `;
        entryList.appendChild(entryDiv);
      });
    }
  
    // Save a new entry
    journalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const date = document.getElementById('date').value;
      const content = document.getElementById('content').value;
  
      const entries = JSON.parse(localStorage.getItem('entries')) || [];
      entries.push({ title, date, content });
      localStorage.setItem('entries', JSON.stringify(entries));
  
      journalForm.reset();
      loadEntries();
    });
  
    // Delete an entry
    window.deleteEntry = (index) => {
      const entries = JSON.parse(localStorage.getItem('entries')) || [];
      entries.splice(index, 1);
      localStorage.setItem('entries', JSON.stringify(entries));
      loadEntries();
    };
  
    console.log('is this working? line 46')
    // Quotes and Prompts 
      console.log('is this working? line 49')
     
      // Array of random quotes
      const quotes = [
        "The best way to predict the future is to invent it.",
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        "Life is what happens when you're busy making other plans.",
        "The purpose of our lives is to be happy."
      ];
    
      // Array of writing prompts
      const prompts = [
        "Write about your happiest memory.",
        "Describe a place that makes you feel at peace.",
        "What would you do if you had one superpower?",
        "Write a letter to your future self."
      ];
    
      // Get the buttons
      const quoteButton = document.getElementById('random-quote-button');
      const promptButton = document.getElementById('writing-prompt-button');
    
      // Get the display area for quotes/prompts
      const quoteDisplay = document.getElementById('quote-display');
    
      // Event listener for random quote button
      quoteButton.addEventListener('click', () => {
        console.log('quote button clicked');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
        // create a list for the placeholder-text button, and gets the first element which is the button itself
        let texty = document.getElementsByClassName("placeholder-text")[0];
        // originally set to "none", set it to block so it is visible
        texty.style.display="block";
      });
    
      // Event listener for writing prompt button
      promptButton.addEventListener('click', () => {
        console.log('prompt button clicked');
        const randomIndex = Math.floor(Math.random() * prompts.length);
        quoteDisplay.textContent = prompts[randomIndex];
        let texty = document.getElementsByClassName("placeholder-text")[0];
        texty.style.display="block"
      });
    });


    
    // Video sources array
const videos = [
  'icelandCity.mp4', 
  'mountFuji.mp4',
  'indianStreet.mp4',
  'citySkyline.mp4'
];

let currentVideoIndex = 0; // Start with the first video

// Button and video element references
const videoElement = document.getElementById('video-frame');
const changeVideoButton = document.getElementById('change-video-btn');

// Event listener for button click
changeVideoButton.addEventListener('click', () => {
  // Update the video index
  currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Cycle through videos

  // Update the video source
  videoElement.querySelector('source').src = videos[currentVideoIndex];
  
  // Reload the video
  videoElement.load();
  videoElement.play();
});

document.addEventListener('scroll', () => {
  const virtualWindow = document.querySelector('.virtual-window');
  const journalingSection = document.getElementById('jornaling-text');

  // Get the bounding rectangle of the journaling section
  const journalingRect = journalingSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Initial position (original placement)
  const initialTop = document.querySelector('#window').getBoundingClientRect().top + window.scrollY;

  // If scrolled back up to original position
  if (window.scrollY < initialTop - 100) {
    virtualWindow.style.position = 'absolute';
    virtualWindow.style.top = `${initialTop}px`;
    virtualWindow.style.left = '50%';
    virtualWindow.style.transform = 'translateX(-50%)';
    return; // Stop further adjustments
  }

  // Calculate the new position for the virtual window
  if (journalingRect.top <= windowHeight && journalingRect.bottom >= 0) {
    // Smoothly move the virtual window as you scroll
    const offset = (windowHeight - journalingRect.top) / 2; // Adjust offset dynamically
    virtualWindow.style.position = 'absolute';
    virtualWindow.style.top = `${window.scrollY + offset}px`;
    virtualWindow.style.left = '50%';
    virtualWindow.style.transform = 'translateX(-50%)';
  } else {
    // Reset to a fixed position if the section is out of view
    virtualWindow.style.position = 'fixed';
    virtualWindow.style.top = '20px';
    virtualWindow.style.left = '50%';
    virtualWindow.style.transform = 'translateX(-50%)';
  }});

