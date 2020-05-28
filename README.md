# imovie-app
This is a Node JS application which provides services to give movie recommendation on the basis of movie genre preferences. Currently, a dummy function to fetch static data is used in place of third-party movie service provider like Netflix or IMDB.

## Setup Node JS
[https://nodejs.org/en/](https://nodejs.org/en/)

## Setup MongoDB (keep default settings)
1. For Windows OS, create directory in C: drive => ```mkdir data && cd data && mkdir db``` 
2. For Mac OS, create directory at root location => ```mkdir data && cd data && mkdir db```  
3. Install MongoDB (Keep default settings to connect mongo db):  
[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)  
4. To start MongoDB, run mongod.exe:   
a. For Windows: ```"{{mongoDB installation path}}\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"```  
b. For Mac: ```"{{mongoDB installation path}}\Server\4.2\bin\mongod.exe" --dbpath="{{root location}}\data\db"```  
c. Connect to mongoDB instance **(mongodb://localhost:27017)**  
 ```{{mongoDB installation path}}\MongoDB\Server\4.2\bin\mongo.exe```  
5. To view or edit mongoDB data, use recommended MongoDB Compass Community tool.

## Sample Request Data
Sample request jsons and their respective urls are mentioned in requestJson.txt file.  
 
## Environment Configuration
1. There three different environments configured in project i.e. **default, dev, test**. By default, the default.json will be loaded if no environment provided.
2. To use different environments, add ```SET NODE_ENV={{environmentName}}&& node ./bin/www``` in start script of package.json **(for example: ```SET NODE_ENV=dev&& node ./bin/www```)**

## Install dependencies
Execute the following command in project root directory: ```npm install```

## Start application
Execute the following command in project root directory: ```npm start```

## Run Test cases
Execute the following command in project root directory: ```npm test```
