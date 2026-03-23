import {cart, addTocart, loadFromStorage} from '../../data/cart.js';

describe('Testing addTocart function', ()=>{

    it('Adding a existing product', ()=>{
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliverOptionId: '1'
            }]);
        });

        loadFromStorage();

        addTocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);  
    });

    it('Adding new product on cart', ()=>{

        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });

        loadFromStorage();
        addTocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);  
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
             
    });
});