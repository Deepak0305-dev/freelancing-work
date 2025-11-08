   // Mobile menu toggle
        document.getElementById('menuBtn').addEventListener('click', function () {
            const menu = document.getElementById('mobileMenu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });


           // Edit these variables:
    const phone = '9621970198'; // international format, no + or spaces
    const preMessage = 'Hi! I saw your website and would like to know more.'; // change as you like

    // Build link safely
    const href = 'https://wa.me/' + encodeURIComponent(phone) + '?text=' + encodeURIComponent(preMessage);
    document.getElementById('waBtn').setAttribute('href', href);
      
     const topBtn = document.getElementById("topBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    // Scroll to top when clicked
    topBtn.onclick = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
