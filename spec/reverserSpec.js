

describe('Reverse', function(){

  var reverse = new Reverse();
  it('should reverse a number', function(){
    ex = 123456789
    expect(reverse.convert(ex)).toEqual("987654321")
  });


});


