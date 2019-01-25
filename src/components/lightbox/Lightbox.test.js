/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Article from '../article';

import { Lightbox, mapStateToProps } from './Lightbox';
import { Background } from './Lightbox.styled';

describe('Given a Lightbox component', () => {
  let component;
  let wrapper;
  let hideArticleActionMock;
  const events = [];

  describe('when it is rendered', () => {
    beforeEach(() => {
      hideArticleActionMock = jest.fn();
      document.addEventListener = jest.fn((event, cb) => {
        events[event] = cb;
      });
      const requiredProps = {
        hideArticleAction: hideArticleActionMock,
        article: {
          artwork: 'http://foo.bar',
          content: 'foo',
          title: 'Bar Title',
        },
      };

      component = <Lightbox {...requiredProps} />;
      wrapper = shallow(component);
    });

    afterEach(() => {
      document.addEventListener.mockReset();
      hideArticleActionMock.mockReset();
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should show the Article in full', () => {
      expect(wrapper.find(Article)).toHaveProp('full', true);
    });

    describe('and the user clicks on the Content', () => {
      beforeEach(() => {
        wrapper.find(Background).simulate('click');
      });

      it('should invoke hideArticleAction', () => {
        expect(hideArticleActionMock).toHaveBeenCalledWith();
      });
    });

    describe('and the user clicks on the Content', () => {
      beforeEach(() => {
        events.keydown({ keyCode: 27 });
      });

      it('should invoke hideArticleAction', () => {
        expect(hideArticleActionMock).toHaveBeenCalledWith();
      });
    });
  });
});

describe('Given a mapStateToProps function', () => {
  describe('when it is called', () => {
    it('should return an object with the passed values', () => {
      expect(mapStateToProps({
        articles: {
          list: {
            1: {
              id: 1,
              name: 'foo',
            },
            2: {
              id: 2,
              name: 'bar',
            },
          },
          selected: 1,
        },
      })).toEqual({
        article: {
          id: 1,
          name: 'foo',
        },
      });
    });
  });
});
