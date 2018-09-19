describe('Test our AngularJS appilication', function() {
    describe('Testing CRUDController JS', function() {

        beforeEach(module('mainApp'));
        var scope ={} ;
        var ctrl;
        beforeEach(
            inject(function ($controller) {
                ctrl=$controller('CRUDController',{$scope:scope})
            })
        );


        it('has a Emplist', function() {
            expect(scope.Emplist).toBeDefined();
        });


    });


    describe('Testing Service Hexafy JS', function() {

        describe('hexafy', function () {
            var hexafy;
            beforeEach(function () {

                module('mainApp');
                localStorage.clear();
                var list = [
                    {id:1,fname:"Pasindu",lname:"Weerasinghe",email:"pasinduw@sappo.com",telno:0712840598},
                    {id:2,fname:"Supun",lname:"Rajasinghe",email:"supunr@sappo.com",telno:0715445548}
                ];
                localStorage.setItem( 'Emplist', JSON.stringify(list) );

                inject(function (_hexafy_) {
                    hexafy = _hexafy_;

                });

            });

            it('get data should be equal to the init dataset', function () {
                var list = [
                    {id:1,fname:"Pasindu",lname:"Weerasinghe",email:"pasinduw@sappo.com",telno:0712840598},
                    {id:2,fname:"Supun",lname:"Rajasinghe",email:"supunr@sappo.com",telno:0715445548}
                ];
                var Emplist = hexafy.getData();

                expect(list).toEqual(Emplist);

            });

            it('should add the correct data', function () {


                var emp = {
                    id: 3,
                    fname: "Pathum",
                    lname: "Lakmal",
                    email: "pathl@gmail.com",
                    telno: 0751225547
                };
                hexafy.addData_sevice(emp);
                expect(hexafy.Emplist[2].fname).toEqual("Pathum");
                expect(hexafy.Emplist[2].lname).toEqual("Lakmal");
                expect(hexafy.Emplist[2].email).toEqual("pathl@gmail.com");
                expect(hexafy.Emplist[2].telno).toEqual(0751225547);

            });
            it('When insert data length should be increase by one', function () {
                var beforeLength = hexafy.Emplist.length;

                var emp = {
                    id: 3,
                    fname: "Pathum",
                    lname: "Lakmal",
                    email: "pathl@gmail.com",
                    telno: 0751225547
                };
                hexafy.addData_sevice(emp);
                var afterLength = hexafy.Emplist.length;
                console.log(beforeLength,afterLength);
                expect(beforeLength+1).toEqual(afterLength);

            });

            it('When delete data length should be decrease by one', function () {
                var beforeLength = hexafy.Emplist.length;
                hexafy.deleteData_sevice(0);
                var afterLength = hexafy.Emplist.length;
                console.log(beforeLength,afterLength);
                expect(beforeLength-1).toEqual(afterLength);

            });

            it('shpuld updated telno and email of dataset', function () {

                hexafy.updateData_sevice(1,"Pasindu","Weerasinghe","pasinduw@gmail.com",0771231231);
                expect(hexafy.Emplist[0].fname).toEqual("Pasindu");
                expect(hexafy.Emplist[0].lname).toEqual("Weerasinghe");
                expect(hexafy.Emplist[0].email).toEqual("pasinduw@gmail.com");
                expect(hexafy.Emplist[0].telno).toEqual(0771231231);

            });




















        });

    });



});