var fs = require('fs');

function get_file_parameter() {
	return process.argv[2];
}

function print_file_contents(filename) {
	fs.readFile(filename, {encoding: 'utf-8'},
		function(err,file_contents) {
			if(err) {
				process.stdout.write(err);
				process.exit;
			}
			process.stdout.write(file_contents); 
		});
}

function read_filename() {
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
}

var file_parameter = get_file_parameter();
if(file_parameter) {
	print_file_contents(file_parameter);
} else {
	console.log('You must supply a filename.');
  	read_filename();
}

