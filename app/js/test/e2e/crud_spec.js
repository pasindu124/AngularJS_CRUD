describe("Test the crud application", function () {
    beforeEach(function() {
    });
   it("test the insert data on the from", function () {
       browser.get("http://localhost:8004/");

       let fname = element(by.model('fname'));
       let lname = element(by.model('lname'));
       let email = element(by.model('email'));
       let telno = element(by.model('telno'));


       fname.sendKeys('Jayantha');
       lname.sendKeys('Weerasinghe');
       email.sendKeys('jrwweerasinghe@gmail.com');
       telno.sendKeys('0712840545');

       expect(fname.getAttribute('value')).toEqual('Jayantha');
       expect(lname.getAttribute('value')).toEqual('Weerasinghe');
       expect(email.getAttribute('value')).toEqual('jrwweerasinghe@gmail.com');
       expect(telno.getAttribute('value')).toEqual('0712840545');



   });

   it ('click the save button and check whether data inserted', function () {
       element(by.css('[value="add_data"]')).click();

       element.all(by.repeater('Emp in Emplist').row(0)).all(by.css('.ng-binding')).then(function (items) {
           expect(items.length).toBe(5);
           expect(items[0].getText()).toBe('1');
           expect(items[1].getText()).toBe('Jayantha');
           expect(items[2].getText()).toBe('Weerasinghe');
           expect(items[3].getText()).toBe('jrwweerasinghe@gmail.com');
           expect(items[4].getText()).toBe('0712840545');
       });


   });

   it('clear the input fields after enater one dataset', function () {
       let fname = element(by.model('fname'));
       let lname = element(by.model('lname'));
       let email = element(by.model('email'));
       let telno = element(by.model('telno'));


       expect(fname.getAttribute('value')).toEqual('');
       expect(lname.getAttribute('value')).toEqual('');
       expect(email.getAttribute('value')).toEqual('');
       expect(telno.getAttribute('value')).toEqual('');
   });

   it('update the email and phone number',function () {
      let newEmail = "jayantha@gmail.com";
      let newTelno = "0712554457";

       element(by.repeater('Emp in Emplist').row(0).column('Emp.id')).click();
       element(by.model('email')).clear().sendKeys(newEmail);
       element(by.model('telno')).clear().sendKeys(newTelno);

       element(by.css('[value="update_data"]')).click();

       element.all(by.repeater('Emp in Emplist').row(0)).all(by.css('.ng-binding')).then(function (items) {
           expect(items.length).toBe(5);
           expect(items[0].getText()).toBe('1');
           expect(items[1].getText()).toBe('Jayantha');
           expect(items[2].getText()).toBe('Weerasinghe');
           expect(items[3].getText()).toBe(newEmail);
           expect(items[4].getText()).toBe(newTelno);
       });
       //browser.driver.sleep(5000);
   });

   it("delete the contact", function () {
       element(by.repeater('Emp in Emplist').row(0)).$('#copyCalc').click();

       element.all(by.repeater('Emp in Emplist')).then(function (items) {
           expect(items.length).toBe(0);
       });
       //browser.driver.sleep(5000);
   })
});