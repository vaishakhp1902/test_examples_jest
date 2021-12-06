const functions = require('./functions')


test('Adds 2+2=4',()=>{
    expect(functions.add(2,2)).toBe(4)
})

test('Adds 2+2!=5',()=>{
    expect(functions.add(2,2)).not.toBe(5)
}) 

//to be null

test('should be null',()=>{
    expect(functions.isNull()).toBeNull()
}) 

//To be falsy
test('should be falsy',()=>{
    expect(functions.checkValue(undefined)).toBeFalsy()
}) 

//ToEqual

test('user should be Vaishakh Poduval Object',()=>{
    expect(functions.createUser()).toEqual({firstName:'Vaishakh' , lastName:'Poduval'})
}) 


//lessThan