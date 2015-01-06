

//TODO nodeclipse maven maven-archetype-webapp name|artifactId
// maven new <archetype> <name|artifactId>
// mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-webapp-mkyong -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false

//TODO maven new <archetype> <name|artifactId> [<other arguments>]
// i.e. just pass other arguments
// $ mvn archetype:generate -DgroupId=org.sonatype.mavenbook.simpleweb -DartifactId=simple-webapp -Dpackage=org.sonatype.mavenbook -Dversion=1.0-SNAPSHOT



var argv = process.argv; // 0 - node, 1 - app.js
//`===` does not compare strings well
//if (argv[2]!='new'){
//	console.log('Usage: maven new <archetype> <name|artifactId> ');
//	console.log('Example: maven new maven-archetype-webapp my-maven-webapp ');
//	return;
//}

var archetype = argv[3];
var name = argv[4] || 'my-webapp';

var what = 'mvn';
//var optionsNew = ['archetype:generate', '-DgroupId=com.mycompany.app', '-DartifactId='+name,
//                  '-DarchetypeArtifactId='+archetype, '-DinteractiveMode=false'];
var optionsNew = ['-version'];

//-- subs {
var log2console = function (data) {
	console.log(data);
};
var outputString = '';
var onExitShowCode = function (code) {
	console.log(what+' process exit code ' + code);
};
var spawning = function (what, args, dataHandler, closeHandler) {
	var child_process = require('child_process');
	var spawn = child_process.spawn;
	/*
	The third argument is used to specify additional options, which
	 defaults to: { cwd: undefined,
	  env: process.env
	}
	Note that if spawn receives an empty options object, it will result in spawning the process with an empty environment
	rather than using process.env. This due to backwards compatibility issues with a deprecated API.
	*/
	var additionalOptions = { cwd: null, //pwd(),
	  env: process.env
	};
	//var additionalOptions = {};
	var spawned = spawn(what, args, additionalOptions);
	console.log('starting '+what+' '+args.join(' '));
	spawned.stdout.setEncoding('utf8');
	spawned.stdout.on('data', dataHandler);
	spawned.stderr.setEncoding('utf8');
	spawned.stderr.on('data', dataHandler);
	spawned.on('close', closeHandler);
	return spawned;
};
//-- subs }

//console.log(process.env);
//var spawned = spawning(what, optionsNew, log2console, onExitShowCode);

var createMavenFolders = function() {
	console.log('creating Maven Standard Directory Layout, see http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html');
	var shelljs = require('shelljs');
	shelljs.mkdir('-p', 'src/main/java');
	shelljs.mkdir('-p', 'src/main/resources');
	shelljs.mkdir('-p', 'src/test/java');
	shelljs.mkdir('-p', 'src/test/resources');
};
//createMavenFolders();

//------------------ using child_process.exec instead of child_process.spawn ------------------------------------------


//http://www.hacksparrow.com/difference-between-spawn-and-exec-of-node-js-child_process.html
//spawn returns a stream and exec returns a buffer.

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
	 console.log('stdout:\n' + stdout);
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
executing('mvn -version',afterMaven);
