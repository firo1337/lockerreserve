const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const{createAdmin, getAdmin, updateAdmin, deleteAdmin, getAdmins} = require("./routes/admin");

const{createStudent, getStudent, updateStudent, deleteStudent, getStudents} = require("./routes/students");

const{createLocker, getLocker, updateLocker, deleteLocker, getLockers} = require("./routes/locker");

const{createLockerB, getLockerB, updateLockerB, deleteLockerB, getLockersB} = require("./routes/lockerb");

const{createLockerC, getLockerC, updateLockerC, deleteLockerC, getLockersC} = require("./routes/lockerC");

const{login} = require("./routes/login");

app.post("/student", createStudent);
app.get("/student", getStudent);
app.put("/student", updateStudent);
app.delete("/student", deleteStudent);
app.get("/students", getStudents);
/////////////////////////////////////////////////
app.post("/admin", createAdmin);
app.get("/admin", getAdmin);
app.put("/admin", updateAdmin);
app.delete("/admin", deleteAdmin);
app.get("/admins", getAdmins);
///////////////////////////////////////////////
app.post("/login", login);
//////////////////////////////////////////////
app.post("/locker", createLocker);
app.get("/locker", getLocker);
app.put("/locker", updateLocker);
app.delete("/locker", deleteLocker);
app.get("/lockers", getLockers);
//////////////////////////////////////////////
app.post("/lockerb", createLockerB);
app.get("/lockerb", getLockerB);
app.put("/lockerb", updateLockerB);
app.delete("/locker", deleteLockerB);
app.get("/lockersb", getLockersB);
//////////////////////////////////////////////
app.post("/lockerc", createLockerC);
app.get("/lockerc", getLockerC);
app.put("/lockerc", updateLockerC);
app.delete("/lockerc", deleteLockerC);
app.get("/lockersc", getLockersC);

mongoose.connect(
    "mongodb+srv://colorblind:fcporto133@cluster0.svg1z.mongodb.net/bdpap"
  );

  app.listen(port, () =>
  console.log(`Aplicação Backend a correr na porta ${port} !`)
);