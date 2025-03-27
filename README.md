# Movie_List_Exercise
- Open at least four terminal windows

# Codes needed 
- Front End <br />
``` npm init -y ``` <br />
``` npm install express cors pg express ``` <br />
``` npm install vite ``` <br />
``` npm create vite@latest filename ``` <br />
``` npm run dev ``` <br />

-Backend <br />
``` npm install --save-dev nodemon ``` <br />
``` docker run --name pg-movies -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=(databasename) -p 5432:5432 -d postgres ``` <br />







# Issues that may arise
- CORS!!!!
    - The CORS conflict took me forever to fix!
    - Ensure port 5173 and port 8080 are not already in use. If those ports are already in use, kill them by typing ```lsof -i :(portnumber)``` and then ```kill -9 (PID)```. 
    - Restart the server and the frontend. 
    - Ensure CORS is installed and imported correctly on server.js.