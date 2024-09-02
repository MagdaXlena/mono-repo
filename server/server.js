import express from "express";
const app = express();
app.use(express.json());

app.get("/", function (request, response) {
    response.json("You are looking at my root route. How rounde.");
});

app.listen(8080, function () {
    console.log("App is listening on port 8080");
});