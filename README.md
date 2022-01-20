
# Fetch Images 

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

You can also run this as a docker image. Build the image using Dockerfile and run it as a container and it will respond to requests on port 3000. Although, it will require a MonogoDB instance available in its network. If a mongodb container is running as well on the same network, its image name needs to be updated in connection uri in ```db/index.js```.  
