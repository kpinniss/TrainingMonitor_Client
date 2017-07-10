 //Test data
 //weeks
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

    var days = [
          {
            dayNumber:1, id:1021, coreComps:["Html"], 
            lessons:[
              {lessonNumber:1, id:1, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
              {lessonNumber:2, id:2, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
              {lessonNumber:3, id:3, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
            ]
          },
          {
            dayNumber:2, id:1022, coreComps:["Html","CSS"], 
            lessons:[
              {lessonNumber:1, id:4, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
              {lessonNumber:2, id:5, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["CSS"]},
              {lessonNumber:3, id:6, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
            ]
          },
          {
            dayNumber:3, id:1023, coreComps:["JS","CSS"], 
            lessons:[
              {lessonNumber:1, id:7, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["JS"]},
              {lessonNumber:2, id:8, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["CSS"]},
              {lessonNumber:3, id:9, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["CSS"]},
            ]
          },
          {
            dayNumber:4, id:1024, coreComps:["JS"], 
            lessons:[
              {lessonNumber:1, id:10, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["JS"]},
              {lessonNumber:2, id:11, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["JS"]},
              {lessonNumber:3, id:12, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["JS"]},
            ]
          },
          {
            dayNumber:5, id:1025, coreComps:["JS"], 
            lessons:[
              {lessonNumber:1, id:13, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
              {lessonNumber:2, id:14, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
              {lessonNumber:3, id:15, comps:["student should be able to...","student should be able to...","student should be able to..."], compTypes:["Html"]},
            ]
          }
    ];

   var lessons = [
      {lessonNumber:1, id:1, comps:["student should be able to...1","student should be able to...12","student should be able to...23"], compTypes:["Html"]},
      {lessonNumber:2, id:2, comps:["student should be able to...2","student should be able to...13","student should be able to...33"], compTypes:["Html"]},
      {lessonNumber:3, id:3, comps:["student should be able to...3","student should be able to...14","student should be able to...122"], compTypes:["Html"]},
    ];


//DashContr
export class DashboardController {
  constructor($dashService) {
    this.message = 'Dashboard';
    this.dashService = $dashService;
    
    //request weeks data
    this.weeks = weeks;
  }

}
DashboardController.$inject = ["$dashService","$stateParams"];
//DayContr
export class DayController{
  constructor($stateParams){
    this.stateParams = $stateParams;
    this.id = this.stateParams["id"];
    this.day = this.getDay(this.id);
  }

  getDay(id){
    this.day1 = days.filter(function (day) {
      return day.id == id;
    });
    return this.day1.length ? this.day1[0] : null;
  }
}
DayController.$inject = ["$stateParams"];

//LessonContr
export class LessonController{
  constructor($stateParams){
    this.stateParams = $stateParams;
    this.id = this.stateParams["id"];
    this.lesson = this.getLesson(this.id);
    console.log(this.id);
    console.log(this.lesson);
  }

  getLesson(id){
    this.daLesson = lessons.filter(function (lesson) {
      return lesson.id == id;
    });
    return this.daLesson.length ? this.daLesson[0] : null;
  }
}
LessonController.$inject = ["$stateParams"];
