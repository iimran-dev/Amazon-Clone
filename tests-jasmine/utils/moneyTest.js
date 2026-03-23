import { currencyFormat } from "../../scripts/utils/utils.js";

describe('converts into cents', ()=>{
    it('test work with cents', ()=>{
        expect(currencyFormat(2000)).toEqual('20.00');
});
    it('test work with 0', ()=>{
        expect(currencyFormat(0)).toEqual('0.00');
    });
});