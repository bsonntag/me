import { breakpoints } from './breakpoints';
import { createSpacing } from './spacing';
import { minWidth } from './media';

describe('spacing', () => {
  describe('createSpacing', () => {
    it('should create spacings creators with the specified property names', () => {
      const foo = createSpacing(['foo'], {
        bar: {
          base: '1px',
          sm: '2px',
        },
      });

      const expected = expect.arrayContaining([
        'foo: 1px;',
        minWidth(breakpoints.sm),
        'foo: 2px;',
      ]);

      expect(foo('bar')).toEqual(expected);
    });

    it('should create spacings creators that accept custom values', () => {
      const foo = createSpacing(['foo'], {});

      const expected = expect.arrayContaining([
        'foo: 2px;',
        minWidth(breakpoints.xs),
        'foo: 4px;',
      ]);

      expect(foo({ base: '2px', xs: '4px' })).toEqual(expected);
    });
  });
});
