var mongoose = require('mongoose');
var dbURI = 'mongodb://t2m:t2mt2m@ds259305.mlab.com:59305/anu7anjoria';
//let dbURI = 'mongodb://localhost:27017/chitkara';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

//Including various schemas

require('./student/ideation/idea');
require('./student/counselling/counsel');
require('./student/feedback/feed');
require('./student/cho');
require('./faculty');
require('./counsellor');
require('./hod');
require('./mod');
require('./questions');
require('./userSignup');
require('./mod');
require('./coc');
require('./questions');
require('./facultySignup');

