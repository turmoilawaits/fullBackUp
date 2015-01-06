
var verbose = true;

var executing = function(execString,cb){
	var child_process = require('child_process'),
		exec = child_process.exec,
	 child;
	/*
	The default options are { encoding: 'utf8',
	timeout: 0,
	maxBuffer: 200*1024,
	killSignal: 'SIGTERM',
	cwd: null,
	env: null }
	If timeout is greater than 0, then it will kill the child process if it
	runs longer than timeout milliseconds. The child process is killed
	with killSignal (default: 'SIGTERM'). maxBuffer specifies the
	largest amount of data allowed on stdout or stderr - if this value
	is exceeded then the child process is killed.
	*/
	var options = { encoding: 'utf8',
			  timeout: 0,
			  maxBuffer: 200*1024,
			  killSignal: 'SIGTERM',
			  cwd: null,
			  env: process.env };

	child = exec(execString, options,
		function (error, stdout, stderr) {
		 console.log('stdout:\n' + stdout); //git version 1.8.3.msysgit.0
		 console.log('stderr:\n' + stderr);
		 if (error !== null) {
		   console.log('exec error: ' + error);
		 }
		 cb(error);
	});
};
var afterMaven = function(error){
	if (!error) {
		console.log('OK');
	}
};
executing('git --version',afterMaven);

var getGitVersion = function(cb){ // passed callback function will get git version as 1st parameter
	var child_process = require('child_process'),
	exec = child_process.exec,
	child = exec('git --version',
		function (error, stdout, stderr) {
			 if (verbose) console.log('stdout:\n' + stdout); //git version 1.8.3.msysgit.0
			 if (verbose) console.log('stderr:\n' + stderr);
			 if (error !== null) {
				 if (verbose) console.log('exec error: ' + error);
				 //return undefined;
				 cb(undefined);
			 }
			 var ar = stdout.split(' '); //[ 'git', 'version', '1.8.3.msysgit.0\n' ]
			 console.log(ar);
			 if (ar[1]!='version') cb(undefined);
			 cb(ar[2]);
		}
	);
};
var processGitVersion = function(gitVersion){
	console.log(gitVersion);
}
getGitVersion(processGitVersion);

