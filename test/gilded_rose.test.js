const {Shop, Item, AgedBrie,Sulfura,Backstage} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
//test fromage
  it("should Aged Brie", function() {
    const gildedRose = new Shop([new AgedBrie("Aged Brdsdsdie", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
  });
  
  it("Aged Brie sellIn 2 & quality 0 should return sellIn 1 & quality 1 ", () => {
    const gilded = new Shop([new AgedBrie("Aged Brie", 2, 0)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  })



  //test sulfura
  it("should sulfura", function() {
    const gildedRose = new Shop([new Sulfura("Aged Brdsdsdie", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
  });


  //Backstage
  it("should sulfura", function() {
    const gildedRose = new Shop([new Backstage("Aged Brdsdsdie", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
  });
});
