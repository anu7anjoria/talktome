var mongoose = require('mongoose');
// var dbURI = 'mongodb+srv://anusanjoria:PNzKaWBWFqN3Ddsf@cluster0.2z9zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//let dbURI = 'mongodb://localhost:27017/chitkara';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect('mongodb+srv://anusanjoria:PNzKaWBWFqN3Ddsf@cluster0.2z9zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${'mongodb+srv://anusanjoria:PNzKaWBWFqN3Ddsf@cluster0.2z9zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'}`);
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
require('./answer');
require('./counsellor');
require('./hod');
require('./mod');
require('./questions');
require('./userSignup');
require('./mod');
require('./coc');
require('./questions');
require('./facultySignup');
require('./questionAns');
require('./studentList');
require('./ideaReply');
