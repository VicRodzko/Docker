const express = require('express');
const router = express.Router();
const DataBaseHandler = require("../config/DataBaseHandler");
const dataBaseHandler = new DataBaseHandler();

const connection = dataBaseHandler.createConnection();

router.get('/', function (req, res, next) {
  const sql = 'SELECT * FROM EMPLOYEES';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        message: 'Error occured'
      });
    } else {
      res.json({
        success: true,
        result: results
      });
    }
  });
    // connection.query('CALL sp_GetEmployees();', function (error, result, fields) {
    //     if (error) throw error;
    //
    //     if (result[0].length === 0) {
    //         res.status(404).send({
    //             status : "ERROR",
    //             message: "User not found"
    //         });
    //     } else {
    //         res.status(202).send({
    //             status : "SUCCESS",
    //             message: "User was found",
    //             data : result[0]
    //         });
    //     }
    // });
});

router.post('/', (req, res) => {
  const employee = req.body;
  const sql = 'INSERT INTO EMPLOYEES values(?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql, [employee.name, employee.positions, employee.phone, employee.location, employee.email], (err) => {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        message: 'Error occured'
      });
    } else {
      res.json({
        success: true,
        message: 'Successfully added employee'
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  const id= req.params.id;
  const sql = 'DELETE FROM EMPLOYEES WHERE id = ?';
  connection.query(sql, [id], function (err, results) {
    if (err) {
      console.error(err);
      res.json({
        success: false,
        message: 'Error occured'
      });
    } else {
      res.json({
        success: true,
        result: results
      });
    }
  });
  res.redirect('/employees');
});

module.exports = router;
