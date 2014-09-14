window.onload = function() {
	var image = document.getElementsByTagName('img')[0];

	const tileSize = 32;
	const imageWidth = image.naturalWidth;
	const imageHeight = image.naturalHeight;

	var tilesX = getTiles(imageWidth);
	var tilesY = getTiles(imageHeight);

	var init = function(e, size) {
	    var nearestX     = 0;
	    var nearestY     = 0;
	    var positionXY   = [e.pageX, e.pageY];
	    
	    nearestX = parseInt(positionXY[0]);
	    nearestY = parseInt(positionXY[1]);
	    
	    var iPos = false;

	    var getCoords = function(nearest) {
	        var currentRes = 1;
	        
	        for(var i = 1; i < size; i++) {
	            
	            var num = tileSize * i;
	            
	            if(nearest <= num && num >= tileSize) {
	                while(nearest != num) {
	                    nearest++;
	                }          
	            }
	            else {
	                currentRes++;
	            }
	            
	            if(nearest == num) {
	                break;
	            }
	            
	        }
	        return currentRes;
	    }
	    
	    var coordsX = getCoords(nearestX);
	    var coordsY = getCoords(nearestY);
	    
	    alert(size * (coordsY - 1) + coordsX);
	}

	function getTiles(size) {
	    var i = 0;
	    while(size >= tileSize) {
	        size -= tileSize;
	        i++;
	    }
	    return i;
	}

	var currentRow = 0;
	var currentIndex = 0;

	for(var i = 0; i < tilesX * tilesY; i++) 
	{
	    var loc = document.createElement('div');
	    loc.setAttribute('class', 'loc');
	    loc.style.left = currentIndex * tileSize + 'px';
	    loc.style.top = currentRow * tileSize + 'px';
	    document.body.appendChild(loc);
	    
	    loc.addEventListener('click', function(e) {
	        init(e, tilesX);
	    });
	    
	    currentIndex++;
	    
	    if(currentIndex >= tilesX) {
	        currentRow++;
	        currentIndex = 0;
	    }    
	}
}