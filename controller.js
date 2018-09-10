var app = angular.module("mainApp",[]);
app.controller("CRUDController", function ($scope,hexafy) {
    $scope.Emplist = hexafy.Emplist;
    $scope.addData = function () {
        var emp = {
            id: hexafy.Emplist.length+1,
            name: $scope.name,
            salary: $scope.salary
        }

        hexafy.Emplist.push(emp);

        hexafy.updateLocalStorage()
        clearModel() //reset all the values to default
    }
    $scope.deleteData = function (Emp) {
        var index = $scope.Emplist.indexOf(Emp);
        $scope.Emplist.splice(index,1);
        hexafy.updateLocalStorage()
    }

    $scope.bindSelectData = function (Emp) {
        $scope.id=Emp.id;
        $scope.name = Emp.name;
        $scope.salary =Emp.salary;
    }

    $scope.updateData = function () {
        for (var i=0;i<hexafy.Emplist.length;i++){
            if ($scope.Emplist[i].id == $scope.id){
                $scope.Emplist[i].name = $scope.name;
                $scope.Emplist[i].salary = $scope.salary;
            }
        };
        hexafy.updateLocalStorage()
    }

    function clearModel() {
        $scope.id=0;
        $scope.name = "";
        $scope.salary =0;
    }


});

app.service('hexafy', function() {

    if(!(localStorage.getItem("Emplist") === null)){
        this.Emplist = JSON.parse(localStorage.getItem('Emplist'));
    }else {
      this.Emplist = [];
    }
    this.updateLocalStorage = function () {
        localStorage.setItem( 'Emplist', JSON.stringify(this.Emplist) );
    }
});
