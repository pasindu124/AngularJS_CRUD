describe('Test our AngularJS appilication', function() {
    describe('Testing CRUDController JS', function() {

        beforeEach(module('mainApp'));
        let scope ={} ;
        let ctrl;
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
            let hexafy;
            beforeEach(function () {

                module('mainApp');

                let list = [
                    {id:1,fname:"Pasindu",lname:"Weerasinghe",email:"pasinduw@sappo.com",telno:712840598},
                    {id:2,fname:"Supun",lname:"Rajasinghe",email:"supunr@sappo.com",telno:715445548}
                ];
                localStorage.setItem( 'Emplist', JSON.stringify(list) );

                inject(function (_hexafy_) {
                    hexafy = _hexafy_;

                });

            });

            afterEach(function () {
                localStorage.clear();
            });

            it('get data should be equal to the init dataset', function () {
                let list = [
                    {id:1,fname:"Pasindu",lname:"Weerasinghe",email:"pasinduw@sappo.com",telno:712840598},
                    {id:2,fname:"Supun",lname:"Rajasinghe",email:"supunr@sappo.com",telno:715445548}
                ];
                let Emplist = hexafy.getData();

                expect(list).toEqual(Emplist);

            });

            it('should add the correct data', function () {


                let emp = {
                    id: 3,
                    fname: "Pathum",
                    lname: "Lakmal",
                    email: "pathl@gmail.com",
                    telno: 751225547
                };
                hexafy.addData_sevice(emp);
                let list = JSON.parse(localStorage.getItem('Emplist'));

                expect(list[2].fname).toEqual("Pathum");
                expect(list[2].lname).toEqual("Lakmal");
                expect(list[2].email).toEqual("pathl@gmail.com");
                expect(list[2].telno).toEqual(751225547);

            });
            it('When insert data length should be increase by one', function () {
                let beforeLength = JSON.parse(localStorage.getItem('Emplist')).length;

                let emp = {
                    id: 3,
                    fname: "Pathum",
                    lname: "Lakmal",
                    email: "pathl@gmail.com",
                    telno: 751225547
                };
                hexafy.addData_sevice(emp);
                let afterLength = JSON.parse(localStorage.getItem('Emplist')).length;
                console.log(beforeLength,afterLength);
                expect(beforeLength+1).toEqual(afterLength);

            });

            it('When delete data length should be decrease by one', function () {
                expect(JSON.parse(localStorage.getItem('Emplist'))[1]).toBeDefined();
                
                let beforeLength = JSON.parse(localStorage.getItem('Emplist')).length;
                hexafy.deleteData_sevice(1);
                let afterLength = JSON.parse(localStorage.getItem('Emplist')).length;
                console.log(beforeLength,afterLength);
                
                expect(beforeLength-1).toEqual(afterLength);
                expect(JSON.parse(localStorage.getItem('Emplist'))[1]).not.toBeDefined();
            });

            it('shpuld updated telno and email of dataset', function () {

                hexafy.updateData_sevice(1,"Pasindu","Weerasinghe","pasinduw@gmail.com",771231231);

                let list = JSON.parse(localStorage.getItem('Emplist'));

                expect(list[0].fname).toEqual("Pasindu");
                expect(list[0].lname).toEqual("Weerasinghe");
                expect(list[0].email).toEqual("pasinduw@gmail.com");
                expect(list[0].telno).toEqual(771231231);

            });




















        });

    });



});