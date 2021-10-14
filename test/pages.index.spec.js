import {mount} from '@vue/test-utils';
import Vuetify from 'vuetify';
import MainPage from '@/pages/index';

const mockBooks = [
  {
    id: 1,
    autor: 'TestAutor',
    pealkiri: 'TestHeadline',
    pildiNimi: 'TestPicture',
    saadavus: 0
  },
  {
    id: 3,
    autor: 'William Shakespeare',
    pealkiri: 'The Tempest',
    pildiNimi: 'tempest.jpg',
    saadavus: 5
  },
  {
    id: 5,
    autor: 'Jordan B. Peterson',
    pealkiri: '12 Rules for Life: An Antidote to Chaos',
    pildiNimi: '12-rules-to-life.png',
    saadavus: 10
  },
  {
    id: 7,
    autor: 'H. P. Lovecraft',
    pealkiri: 'The Call of Cthulhu',
    pildiNimi: 'cthulhu-mythos.PNG',
    saadavus: 15
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: mockBooks
  }))
}));


describe('index.vue', () => {
  const vuetify = new Vuetify();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainPage, {
      vuetify
    });
  });

  it('should load page with title', () => {
    expect(wrapper.text()).toContain('Raamatud');
  });

  it('should fill table with correct amount of books', async () => {
    await wrapper.vm.getBooks();
    expect(wrapper.vm.books.length).toEqual(mockBooks.length)
  });

  it('should have all the headlines in order', async () => {
    await wrapper.vm.getBooks();
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(1)').text()).toContain('TestHeadline')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(2)').text()).toContain('The Tempest')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(3)').text()).toContain('12 Rules for Life: An Antidote to Chaos')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(4)').text()).toContain('The Call of Cthulhu')
  });

  it('should have all the authors in order', async () => {
    await wrapper.vm.getBooks();
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(1)').text()).toContain('TestAutor')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(2)').text()).toContain('William Shakespeare')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(3)').text()).toContain('Jordan B. Peterson')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(4)').text()).toContain('H. P. Lovecraft')
  });

  it('should have all the availability in order', async () => {
    await wrapper.vm.getBooks();
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(1)').text()).toContain('Saadavus: 0 tk')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(2)').text()).toContain('Saadavus: 5 tk')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(3)').text()).toContain('Saadavus: 10 tk')
    expect(wrapper.find('.v-data-table__wrapper tr:nth-child(4)').text()).toContain('Saadavus: 15 tk')
  });
});

