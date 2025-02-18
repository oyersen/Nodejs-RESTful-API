const router = require("express").Router();
const data = require("../data.js");

// GET /actor
router.get("/", (req, res) => {
  res.status(200).json(data);
});

// GET /actor/1
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  console.log("req.params: ", req.params); //actor/1  params: { id: '1' }
  console.log("req.query: ", req.query); //actor/1?name=Tom  query: { name: 'Tom' }

  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor);
  } else {
    res.status(404).json({ message: "Actors not found" });
  }
});

// CREATE - POST /actor
let nextId = 4;
router.post("/", (req, res) => {
  console.log("req.body: ", req.body); // POST, PUT, DELETE işlemleri için kullanılır.
  let newActor = req.body;
  newActor.id = nextId;
  nextId++;
  data.push(newActor);
  res.status(201).json(newActor);
});

//UPDATE - PUT /actor/1
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, films } = req.body;
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    actor.name = name;
    actor.films = films;
    res.status(200).json(actor);
  } else {
    res.status(404).json({ message: "Actor not found" });
  }
});

// DELETE /actor/1
router.delete("/:id", (req, res) => {
  const deleteActorId = req.params.id;
  const deletedActor = data.findIndex(
    (actor) => actor.id === Number(deleteActorId)
  );
  console.log("req.params: ", req.params); //actor/1  params: { id: '1' }
  if (deletedActor === -1) {
    res.status(404).json({ message: "Actor not found" });
  } else {
    data.splice(deletedActor, 1); //
    res.status(204).end();
  }
});

// Path: 2_Restful_API/routers/actorRouter.js
module.exports = router;
