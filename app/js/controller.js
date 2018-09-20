let app = angular.module("mainApp",[]);
app.controller("CRUDController", function ($scope,hexafy) {

    $scope.Emplist = hexafy.getData();
    $scope.addData = function () {
        let emp = {
            id: $scope.Emplist.length+1,
            fname: $scope.fname,
            lname: $scope.lname,
            email: $scope.email,
            telno: $scope.telno
        };

        hexafy.addData_sevice(emp);
        clearModel();
    };
    $scope.deleteData = function (Emp) {
        let index = $scope.Emplist.indexOf(Emp);
        console.log(index);
        hexafy.deleteData_sevice(index);
    };

    $scope.bindSelectData = function (Emp) {
        $scope.id=Emp.id;
        $scope.fname = Emp.fname;
        $scope.lname =Emp.lname;
        $scope.email =Emp.email;
        $scope.telno =Emp.telno;
    };

    $scope.updateData = function () {
        hexafy.updateData_sevice($scope.id,$scope.fname,$scope.lname,$scope.email,$scope.telno);
    };

    function clearModel() {
        $scope.id=0;
        $scope.fname = "";
        $scope.lname = "";
        $scope.email = "";
        $scope.telno = "";
    }


});
