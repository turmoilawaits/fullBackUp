// http://www.hacksparrow.com/difference-between-spawn-and-exec-of-node-js-child_process.html
// spawn returns a stream and exec returns a buffer.

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

child = exec('mvn -version', options,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

var env2 = process.env;
env2.JAVA_HOME = process.env.JAVA_HOME;
env2.MAVEN_HOME = process.env.MAVEN_HOME;
console.log(process.env);
console.log(env2);
//{ PATH: 'C:/Program Files/Java/jdk1.7.0_11/bin/../jre/bin/server;C:/Program Files/Java/jdk1.7.0_11/bin/../jre/bin;C:/Program Files/Java/jdk1.7.0_11/bin/../jre/lib/amd64;C:\\Program Files\\Java\\jdk1.7.0_11\\bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Users\\weibl\\AppData\\Roaming\\npm;D:\\Progs\\springsource\\apache-maven-3.0.4\\bin;D:\\Progs\\springsource\\spring-roo-1.2.4.RELEASE\\bin;D:\\Progs\\gradle\\gradle-1.10\\bin;D:\\android-sdks\\tools;D:\\android-sdks\\platform-tools;C:\\Program Files\\Perforce;D:\\Progs\\vertx\\vert.x-2.1M5\\bin;D:\\Progs\\apache-ant-1.9.2\\bin;C:\\Ruby200\\bin;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files (x86)\\Intel\\OpenCL SDK\\2.0\\bin\\x86;C:\\Program Files (x86)\\Intel\\OpenCL SDK\\2.0\\bin\\x64;C:\\Program Files\\Microsoft SQL Server\\110\\Tools\\Binn\\;C:\\Program Files\\TortoiseGit\\bin;C:\\Program Files (x86)\\Git\\cmd;C:\\Program Files\\Microsoft\\Web Platform Installer\\;C:\\Program Files (x86)\\SSH Communications Security\\SSH Secure Shell;C:\\Program Files\\nodejs\\;C:\\Users\\weibl\\AppData\\Roaming\\npm;E:\\Eclipse\\Enide-Studio-2014-try2-win64\\eclipse;',
//	  SystemDrive: 'C:',
//	  SystemRoot: 'C:\\Windows',
//	  TEMP: 'C:\\Users\\weibl\\AppData\\Local\\Temp',
//	  TMP: 'C:\\Users\\weibl\\AppData\\Local\\Temp' }
