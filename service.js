app.service('hexafy', function() {

    if(!(localStorage.getItem("Emplist") === null)){
        this.Emplist = JSON.parse(localStorage.getItem('Emplist'));
    }else {
        this.Emplist = [];
    }

    this.getData = function () {
        return this.Emplist;
    }

    this.addData_sevice = function (emp) {
        this.Emplist.push(emp)
        localStorage.setItem( 'Emplist', JSON.stringify(this.Emplist) );
    }

    this.deleteData_sevice = function (index) {
        this.Emplist.splice(index,1);
        localStorage.setItem( 'Emplist', JSON.stringify(this.Emplist) );
    }

    this.updateData_sevice = function (id,name,salary) {
        for (var i=0;i<this.Emplist.length;i++){
            if (this.Emplist[i].id == id){
                this.Emplist[i].name = name;
                this.Emplist[i].salary = salary;
            }
        };
        localStorage.setItem( 'Emplist', JSON.stringify(this.Emplist) );
    }

});