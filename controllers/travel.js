const travel = require("../Model/travel");
const Travel = require("../Model/travel");

const getAllTravels = async(req, res, next)=>{
  
    try{
        const travel = await Travel.find({});
        if(!travel){
            res.status(200).json({ message: "Travelin medeelel oldsngui", travel });
        }
        res.status(200).json({ message: "Travelin medeelel oldloo", travel });

    }catch(err){
        next(err);
    }
}

const getTravel = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({
        message: `${id} travel medeelel oldsongui`,
        err: err.message,
      });
    }
    try {
      const travel = await Travel.findById(id);
      if (!travel) {
        res.status(400).json({ message: "travel is not found ???", travel});
      }
      res.status(200).json({ message: "travel medeelel ilgeegdlee", travel });

    } catch (err) {
      next(err);
    }
  };

  const createTravel = async (req, res, next) => {
    const {title, images, detail, price, day} = req.body;
    try {
      if (!title || !images || !price) {
        res.status(400).json({ message: " medeelel bhgui bna" });
      }
  
      const travel = await Travel.create({
       title, images, detail, price, day
      });
      res.status(201).json({ message: "SUCCESS", travel });
    } catch (err) {
      next(err);
    }
  };
  
  const deleteTravel = async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} travel medeelel oldsngui`,
        err: err.message,
      });
    }
    try {
      const travel = await Travel.findByIdAndDelete(id);
      res.status(200).json({ message: " travel Medeelel ustgagdlaa", travel });
    } catch (err) {
      next(err);
    }
  };
  const updateTravel = async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: `${id} travel  medeelel shinechlgdlee`,
        err: err.message,
      });
    }
    try {
      const travel = await Travel.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ message: "Medeelel shinechlgdlee", travel});
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {createTravel, getAllTravels, getTravel, deleteTravel, updateTravel};