// Instructions

// Build a function that will take an array of filenames (as string) and return an array of array. 
// Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

// Detect the image files based on the end of the filename which is their format (extension).
// Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

// For example:
// Input: ["imgName.extension", "notAnImg"]
// Output: [["imgName.extension", "imgName", "extension"], null]

// So:
// imageFilter(["index.html", "favicon.gif"])
// return [null, ["favicon.gif", "favicon", "gif"]]

function imageFilter(arr) {
  //Polyfill for ends with method
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
  }
  
  //Polyfill for startsWith Method
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
    };
  }


  //create master array
  var masterArray = [];
  
  //loop through each file in the array
  arr.forEach(function (file, index, arr) {
    //if file is an image
    if (file.endsWith(".jpg") || file.endsWith(".JPG") ||
        file.endsWith(".gif") || file.endsWith(".GIF") ||
        file.endsWith(".png") || file.endsWith(".PNG") ||
        file.endsWith(".tiff") || file.endsWith(".TIFF") ||
        file.endsWith(".svg") || file.endsWith(".SVG") ||
        file.endsWith(".bmp") || file.endsWith(".BMP")) {
      //check that file name is valid  
      if (!file.startsWith(".")) {
        //create and initialize tempArray with separated name and extension
        var tempArray = file.split('.');
        //append full filename to beginning of tempArray
        tempArray.unshift(file);
        //append tempArray to master array
        masterArray.push(tempArray);
      } else{
        //append null to master array
        masterArray.push(null);
      }
    } else {
      //append null to master array
      masterArray.push(null);
    }      
  });   
  //return master array
  return masterArray;
}

//Test Cases
Test.describe('imageFilter', function() {
  Test.assertSimilar(imageFilter(["favicon.gif", "img.tiff"]), [["favicon.gif", "favicon", "gif"], ["img.tiff", "img", "tiff"]]);
  Test.assertSimilar(imageFilter(["index.html", "seattle.jpg"]), [null, ["seattle.jpg", "seattle", "jpg"]]);
  Test.assertSimilar(imageFilter([".bash_profile", "workspace.doc", "img0912.jpg"]), [null, null, ["img0912.jpg", "img0912", "jpg"]]);
});