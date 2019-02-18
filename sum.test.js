const functions = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  
});

test('adds 2 + 2 to equal 5', () => {
    expect(functions.sum(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});


test('Should be Falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be Falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test('Should be Falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('Should be Francis Kiryowa ', () => {
    expect(functions.createUser()).toEqual({
        firstname:'Francis',
        lastname:'Kiryowa'
    });
});

// Less than and Greater than
test('Should be under 1600', () => {
     const load1 = 800;
     const load2 = 700;

     expect(load1 + load2).toBeLessThan(1600);
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;

    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', ()  => {
    const team = 'team';
    expect(team).not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', ()  => {
    const usernames = ['john', 'keren','allan','admin'];
    expect(usernames).toContain('admin');
});

// Working with Async Data
// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham'); 
    })
})

// Async Await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham'); 
})





