
enum ItemList {
  AGED_BRIE = "Aged Brie",
  BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS = "Sulfuras, Hand of Ragnaros"
}

const MAX_QAULITY = 50

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class RoseGarden {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  //Get the items after number of days provided in args
  getItems(): Array<Item>{
    return this.items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      
      //If any item starts has word Sulfuras then, it should not be quality or sellIn value
      if(item.name == ItemList.SULFURAS){
        continue;
      }      
      item.sellIn -= 1
       
      //If it is Aged Brie, it increases in quality and max can reach to 50
      if(item.name === ItemList.AGED_BRIE){
        item.quality +=  (item.quality === MAX_QAULITY ) ? 0 : 1
      }else if(item.name === ItemList.BACKSTAGE_PASSES){
        if(item.sellIn < 0 ) item.quality = 0
        else{
          let qua = 1
          if(item.sellIn < 10 ) qua = 2
          if(item.sellIn < 5 ) qua = 3
          item.quality +=  (item.quality === MAX_QAULITY ) ? 0 : qua
        }

        item.quality = item.quality > MAX_QAULITY ? MAX_QAULITY : item.quality

      }else{

        item.quality -= (item.sellIn < 0 ) ? ((item.quality === 0) ? 0 : 2) : 1
       
        item.quality = item.quality < 0 ? 0 : item.quality
        
      }


    }

    return this.items;
  }
}
