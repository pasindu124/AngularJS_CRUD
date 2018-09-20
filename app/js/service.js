app.service('hexafy', function() {

    if(!(localStorage.getItem("Emplist") === null)){
        this.Emplist = JSON.parse(localStorage.getItem('Emplist'));
    }else {
        this.Emplist = [];
    }

    this.getData = function () {
        return this.Emplist;
    };

    this.addData_sevice = function (emp) {
        this.Emplist.push(emp);
        this.update_storage();
    };

    this.deleteData_sevice = function (index) {
        this.Emplist.splice(index,1);
        this.update_storage();
    };

    this.updateData_sevice = function (id,fname,lname,email,telno) {
        for (let i=0;i<this.Emplist.length;i++){
            if (this.Emplist[i].id == id){
                this.Emplist[i].fname = fname;
                this.Emplist[i].lname = lname;
                this.Emplist[i].email = email;
                this.Emplist[i].telno = telno;
            }
        }
        this.update_storage();
    };

    this.update_storage = function () {
        localStorage.setItem( 'Emplist', JSON.stringify(this.Emplist));
    };



});
