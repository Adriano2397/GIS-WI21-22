"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1";
const port = 3000;
const mongoUrl = "mongodb://localhost:27017";
let mongoClient = new mongo.MongoClient(mongoUrl);
async function dbFind(db, collection, requestObject, response) {
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
async function dbAddOrEdit(db, collection, request) {
    let jsonString = "";
    request.on("data", data => {
        jsonString += data;
    });
    request.on("end", async () => {
        await mongoClient.connect();
        //console.log(jsonString); // bei Fehlern zum Testen
        let produkt = JSON.parse(jsonString);
        produkt._id = undefined;
        mongoClient.db(db).collection(collection).insertOne(produkt);
    });
}
async function remove(db, collection, requestObject, request) {
    await mongoClient.connect();
    await mongoClient.db(db).collection(collection).deleteOne(requestObject);
}
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/produkt": {
            await mongoClient.connect();
            switch (request.method) {
                case "GET":
                    await dbFind("db", "Produkte", {}, response);
                    break;
                case "POST":
                    await dbAddOrEdit("db", "Produkte", request);
                    break;
            }
            break;
        }
        case "/details": {
            await dbFind("db", "Produkte", { _id: new mongo.ObjectId(url.searchParams.get("id")) }, response);
        }
        case "/remove": {
            await remove("db", "Produkte", { _id: new mongo.ObjectId(url.searchParams.get("id")) }, request);
        }
        default:
            response.statusCode = 404;
    }
    response.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map