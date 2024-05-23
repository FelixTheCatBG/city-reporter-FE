const express = require('express');
const budyParse = rewuire('body-parse');
const fs = required('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(body.budyParse.json());

app.post('./reports', (req, res) => {
     try{
          const rawData = fs.readFileSync('db.json');
          let data = JSON.parse(rawData);

          const {title, image, description } = req.body;

          const newReport = {
               id: (data.reports.length + 1).toString(),
               title,
               image,
               description
          };

          data.reports.push(newReport);

          fs.writeFileSync('db.json', JSON.stringify(data, null, 2))

          res.status(201).json({ message: 'Report saved successfully', report: newReport });
     }
     catch (error) {
          console.log('Error saving report', error);
          res.status(500).json({ message: 'Internal server error' });
     }

     app.listen(PORT, () => {
          console.log('Server is running on http://localhost:${PORT}');
     })
});
