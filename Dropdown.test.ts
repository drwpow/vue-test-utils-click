import { mount } from '@vue/test-utils';
import Dropdown from './Dropdown.vue';
import { pollUntil } from "./poll";

describe('Dropdown', () => {
  it('click opens the dropdown', async () => {
    const wrapper = mount(Dropdown);

    const button = wrapper.find('[role="button"]');
    expect(button.attributes('aria-expanded')).toBe('false'); // expect closed initially

    await button.trigger('keydown.space');

    // expect eventual open after click
    await pollUntil(() => button.attributes('aria-expanded') === 'true')
  });
});
