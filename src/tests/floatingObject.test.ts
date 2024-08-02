import floatingObject from "../pranks/floatingObjects";


describe('floatingObject', () => {
    test('should create an img element', () => {
        document.body.innerHTML = ''; // Reset the DOM
        floatingObject('https://www.adobe.com/gr_el/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium');
        const img = document.querySelector('img');
        expect(img).not.toBeNull();
        expect(img!.src).toBe('https://www.adobe.com/gr_el/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium');
    });
});
