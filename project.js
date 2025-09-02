// My variables
let heartCount = 0;
let coins = 100; 
let copyCount = 0;

// Get elements from HTML
let heartCounter = document.getElementById('heartCounter');
let coinCounter = document.getElementById('coinCounter');
let copyCounter = document.getElementById('copyCounter');
let callHistory = document.getElementById('callHistory');
let clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Heart buttons - when clicked, add to favorites
let heartButtons = document.querySelectorAll('.heart-btn');
for (let heartBtn of heartButtons) {
  heartBtn.addEventListener('click', function() {
    heartCount = heartCount + 1;
    heartCounter.textContent = heartCount;
    alert('Added to favorites 💗');
  });
}

// Copy buttons - copy the phone number
let copyButtons = document.querySelectorAll('.copy-btn');
for (let copyBtn of copyButtons) {
  copyBtn.addEventListener('click', function() {
    let phoneNumber = copyBtn.getAttribute('data-number');
    if (phoneNumber) {
      navigator.clipboard.writeText(phoneNumber).then(function() {
        copyCount = copyCount + 1;
        copyCounter.textContent = copyCount;
        alert('Copied number: ' + phoneNumber);
      }).catch(function() {
        alert('Copy failed. Your browser may block clipboard access.');
      });
    }
  });
}

// Call buttons - make a call and save to history
let callButtons = document.querySelectorAll('.call-btn');
for (let callBtn of callButtons) {
  callBtn.addEventListener('click', function() {
    let serviceName = callBtn.getAttribute('data-service');
    let phoneNumber = callBtn.getAttribute('data-number');
    
    if (!serviceName) {
      serviceName = 'Service';
    } else {
      serviceName = serviceName;
    }
    
    if (!phoneNumber) {
      phoneNumber = '';
    } else {
      phoneNumber = phoneNumber;
    }

    // Check if enough coins
    if (coins < 20) {
      alert('Not enough coins to make a call!');
    } else {
      // Take away 20 coins
      coins = coins - 20;
      coinCounter.textContent = coins;

      // Show calling message
      alert('Calling ' + serviceName + ' (' + phoneNumber + ')...');

      // Get current time
      let currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      
      if (hours < 10) {
        hours = '0' + hours;
      } else {
        hours = hours;
      }
      
      if (minutes < 10) {
        minutes = '0' + minutes;
      } else {
        minutes = minutes;
      }
      
      let timeString = hours + ':' + minutes;

      // Create new history item
      let newHistoryItem = document.createElement('div');
      newHistoryItem.className = 'flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0';
      
      let historyContent = '<div class="flex-1 min-w-0">';
      historyContent = historyContent + '<p class="font-medium text-gray-800 text-sm sm:text-base truncate">' + serviceName + '</p>';
      historyContent = historyContent + '<p class="text-xs sm:text-sm text-gray-500">' + phoneNumber + '</p>';
      historyContent = historyContent + '</div>';
      historyContent = historyContent + '<span class="text-xs text-gray-400 ml-2 whitespace-nowrap">' + timeString + '</span>';
      
      newHistoryItem.innerHTML = historyContent;
      
      // Add to top of call history
      if (callHistory.firstChild) {
        callHistory.insertBefore(newHistoryItem, callHistory.firstChild);
      } else {
        callHistory.appendChild(newHistoryItem);
      }
    }
  });
}

// Clear history button
clearHistoryBtn.addEventListener('click', function() {
  callHistory.innerHTML = '';
});
hjhj