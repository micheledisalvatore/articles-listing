/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Lightbox from '../lightbox';

import { Main, mapStateToProps } from './Main';

describe('Given a Main component', () => {
  let component;
  let wrapper;

  describe('when it is rendered', () => {
    beforeEach(() => {
      component = <Main />;
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should NOT show the Lightbox', () => {
      expect(wrapper.find(Lightbox)).not.toExist();
    })

    describe('and an article is selected', () => {
      beforeEach(() => {
        wrapper.setProps({
          selectedArticle: 1,
        })
      });

      it('should show the Lightbox', () => {
        expect(wrapper.find(Lightbox)).toExist();
      })
    })
  });
});

describe('Given a mapStateToProps function', () => {
  describe('when it is called', () => {
    it('should return an object with the passed values', () => {
      expect(mapStateToProps({
        articles: {
          selected: 1,
        },
      })).toEqual({
        selectedArticle: 1,
      });
    });
  });
});
