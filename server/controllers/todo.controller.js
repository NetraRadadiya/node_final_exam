const Tomodel = require("../model/todo.model");

const GTodo = async (req, res) => {
  try {
    const todo = await Tomodel.find();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const CTodo = async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Please fill in all fields" });
    }
    try {
        const todo = await Tomodel.create(req.body);
        res.status(200).json({ message: "Data Added" })
    } catch (error) {
        return res.status(500).json({ message: error?.message });
    }
};

const UTodo = async (req, res) => {
  try {
    const todo = await Tomodel.findByIdAndUpdate(req.params.id, req.body, {
     
    });
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const DTodo = async (req, res) => {
  try {
    const todo = await Tomodel.findByIdAndDelete(req.params.id);
    if (!todo) {
      
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = { CTodo, GTodo, UTodo, DTodo };
