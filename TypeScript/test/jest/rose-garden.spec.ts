import { Item, RoseGarden } from '@/rose-garden';

/**
 * 
 * @param num_of_days number of days
 * @param roseGarden instance of RoseGarden
 * @returns array of item
 */
const getItemDetailsAfterNDays = (num_of_days: number,roseGarden: RoseGarden ) : Array<Item> =>{
  
  for(let i = 0 ; i< num_of_days; i++){
    roseGarden.updateQuality();
  }

  //Return the list of items info after num of days provided
  return roseGarden.getItems()
}

describe('Rose Garden', () => {

  describe('Aged Brie', () => {
  
    it('check Aged Brie after 1 day', () => {
      const roseGarden = new RoseGarden([new Item('Aged Brie', 2, 48)]);
      const items = roseGarden.updateQuality();
      expect(items[0].name).toBe('Aged Brie');
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(49);
    });

    it('check Aged Brie after 4 days', () => {
      const roseGarden = new RoseGarden([new Item('Aged Brie', 2, 48)]);

      const items = getItemDetailsAfterNDays(4,roseGarden)
      expect(items[0].name).toBe('Aged Brie');
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(50);
    });

  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    const name = 'Sulfuras, Hand of Ragnaros'
  
    it('check Sulfuras, Hand of Ragnaros after 1 day', () => {
      const roseGarden = new RoseGarden([new Item(name,0,80)]);
      const items = getItemDetailsAfterNDays(1,roseGarden)
      expect(items[0].name).toBe(name);
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });

    it('check Sulfuras, Hand of Ragnaros after 5 days with initial sellIn = 0', () => {
      const roseGarden = new RoseGarden([new Item(name, 0, 80)]);
      const items = getItemDetailsAfterNDays(5,roseGarden)
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });

    it('check Sulfuras, Hand of Ragnaros after 5 days with initial sellIn = -1', () => {
      const roseGarden = new RoseGarden([new Item(name, -1 , 80)]);

      const items = getItemDetailsAfterNDays(5,roseGarden)
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });

  })


  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    const name = 'Backstage passes to a TAFKAL80ETC concert'
  
    it('check Backstage passes to a TAFKAL80ETC concert after 1 day', () => {
      const roseGarden = new RoseGarden([new Item(name,15,20)]);
      const items = getItemDetailsAfterNDays(1,roseGarden)
      expect(items[0].name).toBe(name);
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });

    it('check Backstage passes to a TAFKAL80ETC concert after 6 days', () => {
      const roseGarden = new RoseGarden([new Item(name, 15, 20)]);
      const items = getItemDetailsAfterNDays(6,roseGarden)
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(27);
    });

    it('check Backstage passes to a TAFKAL80ETC concert after 5 days', () => {
      const roseGarden = new RoseGarden([new Item(name, 5 , 49)]);
      const items = getItemDetailsAfterNDays(5,roseGarden)
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(50);
    });

    it('check Backstage passes to a TAFKAL80ETC concert after 6 days', () => {
      const roseGarden = new RoseGarden([new Item(name, 5 , 49)]);

      const items = getItemDetailsAfterNDays(6,roseGarden)
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

  })

  describe('Elixir of the Mongoose', () => {
    const name = 'Elixir of the Mongoose'
  
    it('check Elixir of the Mongoose after 1 day', () => {
      const roseGarden = new RoseGarden([new Item(name,5,10)]);
      const items = getItemDetailsAfterNDays(1,roseGarden)
      expect(items[0].name).toBe(name);
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(9);
    });

    it('check Elixir of the Mongoose after 6 days', () => {
      const roseGarden = new RoseGarden([new Item(name, 5,4)]);
      const items = getItemDetailsAfterNDays(6,roseGarden)
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it('check Elixir of the Mongoose after 20 days', () => {
      const roseGarden = new RoseGarden([new Item(name, 5 , 20)]);
      const items = getItemDetailsAfterNDays(20,roseGarden)
      expect(items[0].sellIn).toBe(-15);
      expect(items[0].quality).toBe(0);
    });

    it('check Elixir of the Mongoose after 10 days', () => {
      const roseGarden = new RoseGarden([new Item(name, 7,20)]);

      const items = getItemDetailsAfterNDays(10,roseGarden)
      expect(items[0].sellIn).toBe(-3);
      expect(items[0].quality).toBe(7);
    });

  })
  
});
