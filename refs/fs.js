const fs = require('fs');
const path = require('path');


// create new directory
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw new Error(err);
//
//   console.log('Directory was created');
// });

// create new file
// fs.writeFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'Hello Node.js', err => {
//   if (err) throw new Error(err);
//
//   console.log('File was created');
// });



// create file with some content
// fs.writeFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'Hello Node.js', err => {
//   if (err) throw err;
//
//   console.log('File was created');

  // update content existing file
  // fs.appendFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'Hello Node.js and new content', err => {
  //   if (err) throw err;
  //
  //   console.log('file has been updated');

    // read content
//     fs.readFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'utf-8', (err, data) => {
//       if (err) throw err;
//
//       console.log(data);
//     });
//   });
// });



fs.rename(
  path.join(__dirname, 'notes', 'my-notes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
  if (err) throw err;

  console.log('the filename has been changed');
});
