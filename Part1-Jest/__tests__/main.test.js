const formatVolumeIconPath = require('../assets/scripts/main');

describe('Volume Icon Testing', () => {
  test('Max Volume', () => {
    expect(formatVolumeIconPath(100)).toMatch('./assets/media/icons/volume-level-3.svg');
  });
  test('Lower Bound for Icon 3', () => {
    expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
  });
  test('Upper Bound for Icon 2', () => {
    expect(formatVolumeIconPath(66)).toMatch('./assets/media/icons/volume-level-2.svg');
  });
  test('Lower Bound for Icon 2', () => {
    expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
  });
  test('Upper Bound for Icon 1', () => {
    expect(formatVolumeIconPath(33)).toMatch('./assets/media/icons/volume-level-1.svg');
  });
  test('Lower Bound for Icon 1', () => {
    expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg');
  });
  test('Min Volume', () => {
    expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
  });
});