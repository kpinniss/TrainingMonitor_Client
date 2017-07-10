
export class DashboardService{
    constructor($http) {
    this.http = $http;
    this.resource = "/api/weeks/:id";
  }

  //get all weeks
  getWeeks(){
      return this.http.get(this.resource);
  }
  //get by id
  getWeek(id){
      return this.http.get(this.resource + id)
  }

}
DashboardService.$inject = ["$http"];