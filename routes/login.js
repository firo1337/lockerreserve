const students = require("../model/students");
const Admin = require("../model/admin");

exports.login = (req, res) => {
    const { isAdmin, numCartao, password } = req.body;
  
    if (isAdmin) {
      Admin.findOne({ numCartao }, function (err, admin) {
        if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
        if (admin && admin.password === password)
          return res.status(200).json(admin);
  
        return res.status(404).json({ message: "Administrador não encontrado!" });
      });
    } else {
      students.findOne({ numCartao }, function (err, user) {
        if (err) return res.status(500).json({ message: "Ocorreu um erro!" });
        if (user && user.password === password) return res.status(200).json(user);
        return res.status(404).json({ message: "Administrador não encontrado!" });
      });
    }
  };