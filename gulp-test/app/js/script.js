// CODE SILIDER
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
      	scrollTop: $(hash).offset().top
      }, 900, function(){
      	
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
    } // End if
});
});
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


(function() {
  window.signature = {
    initialize: function() {
      return $('.signature svg').each(function() {
        var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
        paths = $('path, circle, rect', this);
        delay = 0;
        results = [];
        for (i = 0, len = paths.length; i < len; i++) {if (window.CP.shouldStopExecution(1)){break;}
          path = paths[i];
          length = path.getTotalLength();
          previousStrokeLength = speed || 0;
          speed = length < 100 ? 20 : Math.floor(length);
          delay += previousStrokeLength + 100;
          results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
        }
window.CP.exitedLoop(1);

        return results;
      });
    },
    animate: function() {
      return $('.signature svg').each(function() {
        var delay, i, len, length, path, paths, results, speed;
        paths = $('path, circle, rect', this);
        results = [];
        for (i = 0, len = paths.length; i < len; i++) {if (window.CP.shouldStopExecution(2)){break;}
          path = paths[i];
          length = $(path).attr('data-length');
          speed = $(path).attr('data-speed');
          delay = $(path).attr('data-delay');
          results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
        }
window.CP.exitedLoop(2);

        return results;
      });
    }
  };

  $(document).ready(function() {
    window.signature.initialize();
    return $('button').on('click', function() {
      window.signature.initialize();
      return setTimeout(function() {
        return window.signature.animate();
      }, 500);
    });
  });

  $(window).load(function() {
    return window.signature.animate();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsU0FBUCxHQUNFO0lBQUEsVUFBQSxFQUFZLFFBQUEsQ0FBQSxDQUFBO2FBQ1YsQ0FBQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsSUFBcEIsQ0FBeUIsUUFBQSxDQUFBLENBQUE7QUFDdkIsWUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxvQkFBQSxFQUFBLE9BQUEsRUFBQTtRQUFBLEtBQUEsR0FBUSxDQUFBLENBQUUsb0JBQUYsRUFBd0IsSUFBeEI7UUFDUixLQUFBLEdBQVE7QUFDUjtRQUFBLEtBQUEsdUNBQUE7O1VBQ0UsTUFBQSxHQUFTLElBQUksQ0FBQyxjQUFMLENBQUE7VUFDVCxvQkFBQSxHQUF1QixLQUFBLElBQVM7VUFDaEMsS0FBQSxHQUFXLE1BQUEsR0FBUyxHQUFaLEdBQXFCLEVBQXJCLEdBQTZCLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBWDtVQUNyQyxLQUFBLElBQVMsb0JBQUEsR0FBdUI7dUJBQ2hDLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxHQUFSLENBQVksWUFBWixFQUEwQixNQUExQixDQUNPLENBQUMsSUFEUixDQUNhLGFBRGIsRUFDNEIsTUFENUIsQ0FFTyxDQUFDLElBRlIsQ0FFYSxZQUZiLEVBRTJCLEtBRjNCLENBR08sQ0FBQyxJQUhSLENBR2EsWUFIYixFQUcyQixLQUgzQixDQUlPLENBQUMsSUFKUixDQUlhLG1CQUpiLEVBSWtDLE1BSmxDLENBS08sQ0FBQyxJQUxSLENBS2Esa0JBTGIsRUFLaUMsTUFBQSxHQUFTLEdBQVQsR0FBZSxNQUxoRDtRQUxGLENBQUE7O01BSHVCLENBQXpCO0lBRFUsQ0FBWjtJQWdCQSxPQUFBLEVBQVMsUUFBQSxDQUFBLENBQUE7YUFDUCxDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxJQUFwQixDQUF5QixRQUFBLENBQUEsQ0FBQTtBQUN2QixZQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLE9BQUEsRUFBQTtRQUFBLEtBQUEsR0FBUSxDQUFBLENBQUUsb0JBQUYsRUFBd0IsSUFBeEI7QUFDUjtRQUFBLEtBQUEsdUNBQUE7O1VBQ0UsTUFBQSxHQUFTLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsYUFBYjtVQUNULEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLFlBQWI7VUFDUixLQUFBLEdBQVEsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxZQUFiO3VCQUNSLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxHQUFSLENBQVksWUFBWixFQUEwQixvQkFBQSxHQUF1QixLQUF2QixHQUErQixLQUEvQixHQUF1QyxLQUF2QyxHQUErQyxXQUF6RSxDQUNPLENBQUMsSUFEUixDQUNhLG1CQURiLEVBQ2tDLEdBRGxDO1FBSkYsQ0FBQTs7TUFGdUIsQ0FBekI7SUFETztFQWhCVDs7RUEwQkYsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsUUFBQSxDQUFBLENBQUE7SUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFqQixDQUFBO1dBRUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFFBQUEsQ0FBQSxDQUFBO01BQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBakIsQ0FBQTthQUNBLFVBQUEsQ0FBWSxRQUFBLENBQUEsQ0FBQTtlQUNWLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBakIsQ0FBQTtNQURVLENBQVosRUFFRSxHQUZGO0lBRnNCLENBQXhCO0VBSGdCLENBQWxCOztFQVNBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxJQUFWLENBQWUsUUFBQSxDQUFBLENBQUE7V0FDYixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQWpCLENBQUE7RUFEYSxDQUFmO0FBcENBIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LnNpZ25hdHVyZSA9XG4gIGluaXRpYWxpemU6IC0+XG4gICAgJCgnLnNpZ25hdHVyZSBzdmcnKS5lYWNoIC0+XG4gICAgICBwYXRocyA9ICQoJ3BhdGgsIGNpcmNsZSwgcmVjdCcsIHRoaXMpXG4gICAgICBkZWxheSA9IDBcbiAgICAgIGZvciBwYXRoIGluIHBhdGhzXG4gICAgICAgIGxlbmd0aCA9IHBhdGguZ2V0VG90YWxMZW5ndGgoKVxuICAgICAgICBwcmV2aW91c1N0cm9rZUxlbmd0aCA9IHNwZWVkIHx8IDBcbiAgICAgICAgc3BlZWQgPSBpZiBsZW5ndGggPCAxMDAgdGhlbiAyMCBlbHNlIE1hdGguZmxvb3IobGVuZ3RoKVxuICAgICAgICBkZWxheSArPSBwcmV2aW91c1N0cm9rZUxlbmd0aCArIDEwMFxuICAgICAgICAkKHBhdGgpLmNzcygndHJhbnNpdGlvbicsICdub25lJylcbiAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWxlbmd0aCcsIGxlbmd0aClcbiAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNwZWVkJywgc3BlZWQpXG4gICAgICAgICAgICAgICAuYXR0cignZGF0YS1kZWxheScsIGRlbGF5KVxuICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS1kYXNob2Zmc2V0JywgbGVuZ3RoKVxuICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS1kYXNoYXJyYXknLCBsZW5ndGggKyAnLCcgKyBsZW5ndGgpXG5cbiAgYW5pbWF0ZTogLT5cbiAgICAkKCcuc2lnbmF0dXJlIHN2ZycpLmVhY2ggLT5cbiAgICAgIHBhdGhzID0gJCgncGF0aCwgY2lyY2xlLCByZWN0JywgdGhpcylcbiAgICAgIGZvciBwYXRoIGluIHBhdGhzXG4gICAgICAgIGxlbmd0aCA9ICQocGF0aCkuYXR0cignZGF0YS1sZW5ndGgnKVxuICAgICAgICBzcGVlZCA9ICQocGF0aCkuYXR0cignZGF0YS1zcGVlZCcpXG4gICAgICAgIGRlbGF5ID0gJChwYXRoKS5hdHRyKCdkYXRhLWRlbGF5JylcbiAgICAgICAgJChwYXRoKS5jc3MoJ3RyYW5zaXRpb24nLCAnc3Ryb2tlLWRhc2hvZmZzZXQgJyArIHNwZWVkICsgJ21zICcgKyBkZWxheSArICdtcyBsaW5lYXInKVxuICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS1kYXNob2Zmc2V0JywgJzAnKVxuICAgICAgICBcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIHdpbmRvdy5zaWduYXR1cmUuaW5pdGlhbGl6ZSgpXG5cbiAgJCgnYnV0dG9uJykub24gJ2NsaWNrJywgLT5cbiAgICB3aW5kb3cuc2lnbmF0dXJlLmluaXRpYWxpemUoKVxuICAgIHNldFRpbWVvdXQoIC0+XG4gICAgICB3aW5kb3cuc2lnbmF0dXJlLmFuaW1hdGUoKVxuICAgICwgNTAwKVxuXG4kKHdpbmRvdykubG9hZCAtPlxuICB3aW5kb3cuc2lnbmF0dXJlLmFuaW1hdGUoKSJdfQ==
//# sourceURL=coffeescript


