/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Article from '../article';

import { Grid, mapStateToProps } from './Grid';

describe('Given a Grid component', () => {
  let component;
  let wrapper;
  let getArticlesActionMock;

  describe('when it is rendered', () => {
    beforeEach(() => {
      getArticlesActionMock = jest.fn();
      const requiredProps = {
        getArticlesAction: getArticlesActionMock,
        articles: {},
      };
      component = <Grid {...requiredProps} />;
      wrapper = shallow(component);
    });

    afterEach(() => {
      getArticlesActionMock.mockReset();
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call getArticlesActionMock', () => {
      expect(getArticlesActionMock).toHaveBeenCalledWith();
    });

    it('should NOT render any Article', () => {
      expect(wrapper.find(Article)).not.toExist();
    });

    describe('and a the articles are passed', () => {
      beforeEach(() => {
        wrapper.setProps({
          articles: {
            1: {
              id: 1,
            }
          },
        });
      });

      it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should render 1 Article', () => {
        expect(wrapper.find(Article)).toHaveLength(1);
      });

      it('should render the Article with the passed id', () => {
        expect(wrapper.find(Article)).toHaveProp('id', 1);
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
          },
        },
      })).toEqual({
        articles: {
          1: {
            id: 1,
            name: 'foo',
          },
        },
      });
    });
  });
});
