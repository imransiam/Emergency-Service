// <!-- JavaScript: Full functionality -->
  
    // --- State ---
    let heartCount = 0;
    let coins = 100;  // starting balance as requested
    let copyCount = 0;

    // --- Navbar elements ---
    const heartCounter = document.getElementById('heartCounter');
    const coinCounter = document.getElementById('coinCounter');
    const copyCounter = document.getElementById('copyCounter');

    // --- Call history elements ---
    const callHistory = document.getElementById('callHistory');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

    // --- Utility: current local time ---
    function getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // --- Hearts: increment navbar count on any card heart click ---
    document.querySelectorAll('.heart-btn').forEach(icon => {
      icon.addEventListener('click', () => {
        heartCount++;
        heartCounter.textContent = heartCount;
        alert('Added to favorites 💗');
      });
    });

    // --- Copy buttons: copy number + alert + increment copy count ---
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const number = btn.dataset.number;
        if (!number) return;
        navigator.clipboard.writeText(number).then(() => {
          copyCount++;
          copyCounter.textContent = copyCount;
          alert(`Copied number: ${number}`);
        }).catch(() => {
          alert('Copy failed. Your browser may block clipboard access.');
        });
      });
    });

    // --- Call buttons: coin deduction, alert, add to call history with time ---
    document.querySelectorAll('.call-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const service = btn.dataset.service || 'Service';
        const number = btn.dataset.number || '';

        if (coins < 20) {
          alert('Not enough coins to make a call!');
          return;
        }

        // Deduct coins
        coins -= 20;
        coinCounter.textContent = coins;

        // Alert call
        alert(`Calling ${service} (${number})...`);

        // Add to call history (prepend)
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0';
        row.innerHTML = `
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-800 text-sm sm:text-base truncate">${service}</p>
            <p class="text-xs sm:text-sm text-gray-500">${number}</p>
          </div>
          <span class="text-xs text-gray-400 ml-2 whitespace-nowrap">${getCurrentTime()}</span>
        `;
        callHistory.prepend(row);
      });
    });

    // --- Clear history ---
    clearHistoryBtn.addEventListener('click', () => {
      callHistory.innerHTML = '';
    });
  
