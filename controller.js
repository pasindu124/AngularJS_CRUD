var app = angular.module("mainApp",[]);
app.controller("CRUDController", function ($scope,hexafy) {
    $scope.Emplist = hexafy.getData();
    $scope.addData = function () {
        var emp = {
            id: $scope.Emplist.length+1,
            name: $scope.name,
            salary: $scope.salary
        }

        hexafy.addData_sevice(emp);
        clearModel();
    }
    $scope.deleteData = function (Emp) {
        var index = $scope.Emplist.indexOf(Emp);
        hexafy.deleteData_sevice(index);
    }

    $scope.bindSelectData = function (Emp) {
        $scope.id=Emp.id;
        $scope.name = Emp.name;
        $scope.salary =Emp.salary;
    }

    $scope.updateData = function () {
        hexafy.updateData_sevice($scope.id,$scope.name,$scope.salary);
    }

    function clearModel() {
        $scope.id=0;
        $scope.name = "";
        $scope.salary =0;
    }


});


