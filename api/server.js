const app = require('./app');
const port = 7000;
app.listen(port, () => {
  console.log(`Inspections API Server running on ${port}`);
});
