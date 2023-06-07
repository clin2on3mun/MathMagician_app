import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('to test calculate logic', ()=>{
  test('calculate logic', ()=>{
    expect(calculate({}, 'AC')).toEqual({ total: null, next: null, operation: null})
  });
  test('calculate logic', ()=>{
    expect(calculate({ total:'1', next:'2', operation: '+'},'=')).toEqual({total:'3', next: null, operation: null})
  })
});

describe('to test operate logic', ()=>{
    test('operate logic', ()=>{
        expect(operate(1,2,'+')).toEqual('3')
    });
    test('operate logic', ()=>{
        expect(operate(2,1,'%')).toEqual('0')
    })
})
