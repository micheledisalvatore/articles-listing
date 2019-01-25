/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import { Content, Img } from './Article.styled';
import { Article } from './Article';

describe('Given an Article component', () => {
  let component;
  let wrapper;
  const showArticleActionMock = jest.fn();
  const requiredProps = {
    artwork: 'http://foo.bar',
    content: '<p>foo html</p>',
    id: 1,
    title: 'Foo Title',
    showArticleAction: showArticleActionMock,
  };

  describe('when it is rendered', () => {
    beforeEach(() => {
      component = <Article {...requiredProps} />;
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the Img with the right src attribute', () => {
      expect(wrapper.find(Img)).toHaveProp('src', requiredProps.artwork);
    });

    it('should render the Img with the right alt attribute', () => {
      expect(wrapper.find(Img)).toHaveProp('alt', requiredProps.title);
    });

    it('should render the Content with the full attribute set to false', () => {
      expect(wrapper.find(Content)).toHaveProp('full', false);
    });

    describe('and the user clicks on the Content', () => {
      beforeEach(() => {
        wrapper.find(Content).simulate('click');
      });

      it('should invoke showArticleAction with the right parameter', () => {
        expect(showArticleActionMock).toHaveBeenCalledWith(requiredProps.id);
      })
    })

    describe('and the full property is passed', () => {
      beforeEach(() => {
        wrapper.setProps({
          full: true,
        });
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should render the Content with the full attribute set to true', () => {
        expect(wrapper.find(Content)).toHaveProp('full', true);
      });
    })
  });
});
