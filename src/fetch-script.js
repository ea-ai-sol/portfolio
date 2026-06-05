import https from 'https';

https.get('https://sites.google.com/view/neurovia/ai/aaas', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // extract body
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
