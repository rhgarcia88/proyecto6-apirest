const Streamer = require("../models/Streamer");


//READ
const getStreamers = async(req,res,next) => {
  try {
      // Encuentra todos los datos de dicha coleccion
        const allStreamers = await Streamer.find();
        return res.status(200).json(allStreamers);
  } catch (error) {
    return res.status(400).json("Error en la petición");
  }
  };

  //READ ONLY ONE
const getAStreamer = async(req,res,next) => {
  try {
        const { id } = req.params;
        const theStreamer = await Streamer.findById(id);
        return res.status(200).json(theStreamer);
  } catch (error) {
    return res.status(400).json("Error en la petición");
  }
  };

//POST 
const postStreamer = async(req,res,next) => {
  try {
     const newStreamer = new Streamer(req.body);
      const streamerSaved = await newStreamer.save();
      return res.status(201).json('creado');
  
  } catch (error) {
    return res.status(400).json("Error genérico");
    }
  }

// UPDATE
const updateStreamer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newStreamer = new Streamer(req.body);
    newStreamer._id = id;
    // findByIdAndUpdate me va a devolver el dato ANTIGUO
    const up = await Streamer.findByIdAndUpdate(id, newStreamer, { new: true });
    return res.status(200).json(up);
  } catch (error) {
    return res.status(400).json("Error");
  }
};

// DELETE
const deleteStreamer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Streamer.findByIdAndDelete(id);
    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(400).json("Error");
  }
};


  module.exports = {getStreamers,
                    postStreamer,
                    updateStreamer,
                    deleteStreamer,
                    getAStreamer};