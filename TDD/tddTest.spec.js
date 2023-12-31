
// 테스트 유닛들을 묶어주고, 전체적인 설명을 제공하는 함수입니다.
    // 다른 사람들이 봤을 때 무엇을 위한 테스트인지 알 수 있도록 하기 위해
describe('자스민 테스트입니다!', () => {
    
    // it 함수: 테스트 유닛을 의미합니다.
    // 첫번째 인자: 테스트 함수 대상을 설명
    // 두번째 인자: 콜백 함수
    it('1을 더해주는 함수입니다.', () => {
        
        const num = 30;

        // expect 함수: 기대식이라고 부릅니다. 실행할 함수의 결과값을 기대합니다.
        // toBe 함수: 매쳐함수. 내가 기대한 결과가 실제로 일치하는지 판단하는 함수입니다. 
            // plusOne 함수에 30을 넣었을 때의 결과값이 31이 되기를 expect한다.
        expect(plusOne(30)).toBe(31);
        // expect(plusOne(num)).toBe(num+1); 위에서 num을 선언해주었으므로 이렇게 작성해도 된다. 
    });
});