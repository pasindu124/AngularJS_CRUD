var app = angular.module("mainApp",[]);
app.controller("CRUDController", function ($scope) {
    $scope.Emplist = [];

    if(!(localStorage.getItem("Emplist") === null)){
        $scope.Emplist = JSON.parse(localStorage.getItem('Emplist'));
    }

    console.log($scope.Emplist)
    $scope.addData = function () {
        var emp = {
            id: $scope.Emplist.length+1,
            name: $scope.name,
            salary: $scope.salary
        }

        $scope.Emplist.push(emp);

        updateLocalStorage()
        clearModel() //reset all the values to default
    }
    $scope.deleteData = function (Emp) {
        var index = $scope.Emplist.indexOf(Emp);
        $scope.Emplist.splice(index,1);
        updateLocalStorage()
    }
    
    $scope.bindSelectData = function (Emp) {
        $scope.id=Emp.id;
        $scope.name = Emp.name;
        $scope.salary =Emp.salary;
    }

    $scope.updateData = function () {
        for (var i=0;i<$scope.Emplist.length;i++){
            if ($scope.Emplist[i].id == $scope.id){
                $scope.Emplist[i].name = $scope.name;
                $scope.Emplist[i].salary = $scope.salary;

            }
        };
        updateLocalStorage()
    }

    function clearModel() {
        $scope.id=0;
        $scope.name = "";
        $scope.salary =0;
    }

    function updateLocalStorage() {
        localStorage.setItem( 'Emplist', JSON.stringify($scope.Emplist) );
    }
});