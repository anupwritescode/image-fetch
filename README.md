
# Fetch Images From AWS S3 Buckets 

This project allows to store links to images and search through them




## Installation

Install project dependencies with npm

```bash
  cd image-fetch
  npm i
```

You should have a mongodb running locally, start mongodb if not already started

```bash
  mongod
```

Start the server 

```bash
  npm start
```

Load initial data into db using script

```bash
  bash scripts/loadData.sh
```

Once this is done, the server will respond to GET requests on /cars API, given the right query parameters. Here's a sample cURL

```bash
  curl -X GET -H 'Content-Type: application/json' \
  'http://localhost:3000/cars?carName=innova&grade=adventure'
```

To add new images, place them at public/images. Modify the script loadData.sh in scripts folder with links to images. You will need to make a PUT request to the /cars API with a JSON array of links to images.

Image file names should follow the naming convention as previous image files. Instead of links, sending a JSON array of filenames in body of a PUT call will also work. Once you have modified the bash file, you can run it as below. 

```bash
  bash scripts/loadData.sh
```
