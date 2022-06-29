const Locker = require("../model/lockerb");

exports.createLockerB = (req, res) => {
  const newLocker = new Locker(req.body);

  newLocker
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
};

exports.getLockerB = (req, res) => {
  const { id } = req.query;

  Locker.findById(id, function (err, locker) {
    if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
    if (locker) return res.status(200).json(locker);
    return res.status(404).json({ message: "Locker não encontrado!" });
  });
};

exports.updateLockerB = (req, res) => {
  const { id } = req.body;

  Locker.findByIdAndUpdate(id, req.body, { new: true }, function (err, locker) {
    if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
    if (locker) return res.status(200).json(locker);
    return res.status(404).json({ message: "Locker não encontrado!" });
  });
};

exports.deleteLockerB = (req, res) => {
  const { id } = req.body;

  Locker.findByIdAndDelete(id, function (err, result) {
    if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
    if (result) return res.status(200).json({ message: "Locker apagado!" });
    return res.status(404).json({ message: "Locker não encontrado!" });
  });
};

exports.getLockersB = (req, res) => {
  
    Locker.find(
      function (err, results) {
        if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
        return res.status(200).json(results);
      }
    );
  };