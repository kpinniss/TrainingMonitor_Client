    "use strict";
var express = require("express");
var router = express.Router();

    
    var weeks = [
      {
        weekNumber:1, id:1001, coreComps:["HTML", "CSS", "JS"], 
        days:
        [ 
          {dayNumber:1, id:1021, coreComps:["Html"]},
          {dayNumber:2, id:1022, coreComps:["Html","CSS"]},
          {dayNumber:3, id:1023, coreComps:["JS","CSS"]},
          {dayNumber:4, id:1024, coreComps:["JS"]},
          {dayNumber:5, id:1025, coreComps:["JS"]}
        ] 
      },
      {
        weekNumber:2, id:1002, coreComps:["Angular", "JS", "Bootstrap"], 
        days:
        [ 
          {dayNumber:1, id:1026, coreComps:["JS"]},
          {dayNumber:2, id:1027, coreComps:["JS","Angular"]},
          {dayNumber:3, id:1028, coreComps:["Angular","Bootstrap"]},
          {dayNumber:4, id:1029, coreComps:["JS"]},
          {dayNumber:5, id:1030, coreComps:["JS"]}
        ] 
      },
      {
        weekNumber:3, id:1003, coreComps:["Material", "CSS", "Less"], 
        days:
        [ 
          {dayNumber:1, id:1031, coreComps:["CSS"]},
          {dayNumber:2, id:1032, coreComps:["Less","CSS"]},
          {dayNumber:3, id:1033, coreComps:["Angular,CSS"]}
        ] 
      },
    ];

router.get('/weeks', function (req, res, next) {
    var results = weeks.map(function (week) {
        return { id: week.id, weekNumber: week.weekNumber };
    });
    res.json(results);
});
router.get('/weeks/:id', function (req, res, next) {
    var weekId = parseInt(req.params['id']);
    var week = findGenre(weekId);
    if (week) {
        res.json(week);
    }
    else {
        res.sendStatus(404);
    }
});
function findGenre(id) {
    var matches = weeks.filter(function (week) {
        return week.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
