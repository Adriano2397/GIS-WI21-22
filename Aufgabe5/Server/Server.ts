import * as http from "http";

namespace Server {
const hostname: string = "127.0.0.1"; 
const port: number = 3000; 


const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
   
            

      response.statusCode = 200; 

     
      response.setHeader("Content-Type", "text/plain"); 
      response.setHeader("Access-Control-Allow-Origin", "*");  
     

     
      let url: URL = new URL(request.url || "",`http://${request.headers.host}`); 

      
      switch (url.pathname) {
        case "/": 
          response.write("Server erreichbar");
          break;
          case "/convertDate": 
          let date: string = url.searchParams.get("date-ges");
          const dateArray: String [] = date.split("-",3);
            let dateYear: String = dateArray[0];
            let dateMonth: String = dateArray[1];
            let dateDay: String = dateArray[2]
          console.log(date);

          response.write("Tag :" +  dateDay + "Monat: " + dateMonth + "Jahr: " + dateYear);
            break;
            
            default:
                response.statusCode = 404;
      }
      response.end(); 
    }
  );

  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`); 
  });
}
