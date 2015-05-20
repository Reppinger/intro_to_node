var fs = require('fs');


var read_filename = function() {
	var filename = "";
	var readline = require('readline');
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question("What file do you want to read? ", function(input) {
		print_file_contents(input);
		rl.close();
    });
    return filename;
};

var print_file_contents = function(filename) {
	fs.readFile(filename, {encoding: 'utf-8'},
		function(err,file_contents) {
			if(err) {
				process.stdout.write(err);
			}
			process.stdout.write(file_contents); 
		});
};

var file_parameter = process.argv[2];
if(!file_parameter) {
  console.log('You must supply a filename.');
  read_filename();
} else {
  print_file_contents(file_parameter);
}

