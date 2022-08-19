const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getCars } = require('./controller')

app.get("/api/cars", getCars)

const { getWheels } = require('./controller')

app.get("/api/wheels", getWheels)

const { getTurbo } = require('./controller')

app.get("/api/turbo", getTurbo)

const { deleteDont } = require('./controller')

app.delete("/api/dontTouch", deleteDont)

app.listen(4000, () => console.log("Server running on 4000"));
