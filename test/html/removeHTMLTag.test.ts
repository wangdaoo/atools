import { removeHTMLTag } from '../../_basic/removeHTMLTag';

test('removeHTMLTag', () => {
  expect(removeHTMLTag('<h1>Hello</h1>')).toBe('Hello');
  expect(removeHTMLTag('<div>Title</div><div>Content</div><div><image src="https://www.baidu.com/img/baidu_jgylogo3.gif" /><h1>imageTitle</h1></div>')).toBe('TitleContentimageTitle');
  expect(removeHTMLTag('<div>Title</div>')).toBe('Title');
  expect(removeHTMLTag('Hello')).toBe('Hello');
});