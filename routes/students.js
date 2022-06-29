const Student = require("../model/students");

exports.createStudent = (req, res) => {
  const newStudent = new Student(req.body);

  newStudent
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
};

exports.getStudent = (req, res) => {
  const { id } = req.query;

  Student.findById(id, function (err, student) {
    if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
    if (student) return res.status(200).json(student);
    return res.status(404).json({ message: "Administrador não encontrado!" });
  });
};

exports.updateStudent = (req, res) => {
  const { id } = req.body;

  Student.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    function (err, student) {
      if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
      if (student) return res.status(200).json(student);
      return res.status(404).json({ message: "Administrador não encontrado!" });
    }
  );
};

exports.deleteStudent = (req, res) => {
  const { id } = req.body;

  Student.findByIdAndDelete(id, function (err, result) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (result)
      return res.status(200).json({ message: "Administrador apagado!" });
    return res.status(404).json({ message: "Administrador não encontrado!" });
  });
};

exports.getStudents = (req, res) => {
  Student.find(function (err, results) {
    if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
    return res.status(200).json(results);
  });
};
