function loadJson(file) {
  return 'module.exports = ' + file.data + ';';
}

// Export build options
module.exports = {
  // Entry point for build
  entry :  {
    js : 'src/main.js',       //the script to be called
    html : 'src/main.html'    //will be used as template for final output
  },
  // Output options
  output : {
    html : 'build.html'  //location to output final built project
  },
  // Options for each file type
  transforms : {
    // '.json' : loadJson
  }
};
