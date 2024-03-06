function myFunctionClose() {
    var x = document.getElementById(&quot;ad_asd&quot;);
    if (x.style.display === &quot;none&quot;) {
      x.style.display = &quot;block&quot;;
    } else {
      x.style.display = &quot;none&quot;;
    }
  }
</script>
<script>
  // Delayed initial display after 5 seconds
  setTimeout(function() {
    var adElement = document.getElementById(&#39;ad_asd&#39;);
    adElement.style.display = &#39;block&#39;;
    adElement.classList.add(&#39;slide_in&#39;);
    // Set interval to hide and show every 30 seconds
    var interval = setInterval(function() {
      adElement.classList.remove(&#39;slide_in&#39;);
      adElement.classList.add(&#39;slide_out&#39;);
      setTimeout(function() {
        adElement.style.display = &#39;none&#39;;
        setTimeout(function() {
          adElement.style.display = &#39;block&#39;;
          adElement.classList.remove(&#39;slide_out&#39;);
          adElement.classList.add(&#39;slide_in&#39;);
        }, 500);
      }, 5000);
    }, 30000); // 30 seconds
  }, 5000);
