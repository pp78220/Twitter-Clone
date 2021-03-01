
class CRUD {

    constructor(_Collection) {
        this.Collection = _Collection;
    }

    get Collection() {
        return this._Collection;
    }

    set Collection(value) {
        this._Collection = value;
    }
  // ======
  // Create
  // ======
  create = async (req, res) => {
    const newEntry = req.body;
    this._Collection.create(newEntry, async (e,result) => {
      if(e) {
        console.log(e);
        res.status(500).send(e);
      } else { 
        res.status(200).send(result);
      }
    });
  };
  
  // =========
  // Read many
  // =========
  readMany = (req, res) => {
    let query = res.locals.query || {};
  console.log(this._Collection)
  this._Collection.find(query, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.Status(200).send(result);
      }
    });
  };

  // ========
  // Read one
  // ========
  readOne = (req, res) => {
    const { id } = req.params;
  
    Collection.findById(_id, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.Status(200).send(result);
      }
    });
  };
  
  // ======
  // Update
  // ======
  update = (req, res) => {
    const changedEntry = req.body;
    Collection.update({ _id: req.params.id }, { $set: changedEntry }, (e,result) => {
      if (e)
      res.status(500).send(e);
      else
      res.Status(200).send(result);
    });
  };
  
  // ======
  // Remove
  // ======
 remove = (req, res) => {
    Collection.remove({ _id: req.params.id }, (e,result) => {
      if (e)
      res.status(500).send(e);
      else
        res.Status(200).send(result);
    });
  };


}

module.exports = CRUD;