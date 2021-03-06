import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; 
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017"; 
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);


interface Produkte {
  _id: string;
  Name: string;
  Ablaufdatum: Date;
  Notiz: string;
  Eingabedatum: Date;
}



async function dbFind(db: string, collection: string, requestObject: any, response: http.ServerResponse): Promise<void> {
  // tslint:disable-next-line: typedef
  let result = await mongoClient
      .db(db)
      .collection(collection)
      .find(requestObject)
      .toArray();
    // console.log(result, requestObject); // bei Fehlern zum Testen
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
  }

async function dbAddOrEdit(db: string, collection: string, request: http.IncomingMessage): Promise<void> {
  let jsonString: string = "";
  request.on("data", data => {
    jsonString += data;
  });
  request.on("end", async () => {
    await mongoClient.connect();
    //console.log(jsonString); // bei Fehlern zum Testen
    let produkt: Produkte = JSON.parse(jsonString);
    produkt._id = undefined;
    mongoClient.db(db).collection(collection).insertOne(produkt);
  
  });
}
async function remove(db: string, collection: string, requestObject: any, request: http.IncomingMessage): Promise<void> {
    await mongoClient.connect();
    await mongoClient.db(db).collection(collection).deleteOne(requestObject);
  
}


const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
      let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
      
      switch (url.pathname) {
        case "/produkt": {
          await mongoClient.connect();
          switch (request.method) {
            case "GET":
              await dbFind("db", "Produkte", {} , response );
              break;
            case "POST":
              await dbAddOrEdit("db", "Produkte", request);
              break;
              }
          break;
          }
          case"/details": {
            await dbFind("db", "Produkte", { _id: new mongo.ObjectId(url.searchParams.get("id"))}, response);
            
          }
          case"/remove": {
            await remove("db", "Produkte", { _id: new mongo.ObjectId(url.searchParams.get("id"))}, request);
          }
          default:
            response.statusCode = 404;
      }
      response.end();
    }
  );
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });