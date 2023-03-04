const {Shop, Item, AgedBrie,Sulfura,Backstage, Conjured} = require("../src/gilded_rose");

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
  });
  //test qualité < 0
  it("Aged Brie sellIn 2 & quality -1 should return quality 0 ", () => {
    const gilded = new Shop([new Item("Aged Brie", 0, 1)])
    const items = gilded.updateQuality();
    expect(items[0].quality).toBe(0)
  });



  //test sulfura
  it("should sulfura", function() {
    const gildedRose = new Shop([new Sulfura("Aged Brdsdsdie", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
  });
  it("sulfura sellIn 100 & quality 1 should return sellIn 100 & quality 100 ", () => {
    const gilded = new Shop([new Sulfura("Sulfuras, Hand of Ragnaro", 100, 1)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(100);
    expect(items[0].quality).toBe(80);
  });


  //Backstage
  it("should backstage", function() {
    const gildedRose = new Shop([new Backstage("Aged Brdsdsdie", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
  });
  it("backstage sellIn 20 & quality 1 should return sellIn 100 & quality 100 ", () => {
    const gilded = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 20, 5)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(19);
    expect(items[0].quality).toBe(6);
  });
  it("backstage sellIn 7 & quality 1 should return sellIn 100 & quality 100 ", () => {
    const gilded = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 7, 5)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(6);
    expect(items[0].quality).toBe(7);
  });
  it("backstage sellIn 3 & quality 1 should return sellIn 100 & quality 100 ", () => {
    const gilded = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 3, 5)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(8);
  });
  // Conjured

  it("if conjured, quality 10 should return quality 8 ", () => {
    const gilded = new Shop([new Conjured("Conjured", 30, 10)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(29);
    expect(items[0].quality).toBe(8);
  });
  it("if conjured, quality 1 should return quality 0 ", () => {
    const gilded = new Shop([new Conjured("Conjured", 0, 1)])
    const items = gilded.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("if conjured, quality = -1 should return quality -1 ", () => {
    const gilded = new Shop([new Conjured("Conjured", 0, -1)])
    const items = gilded.updateQuality();
    expect(items[0].quality).toBe(-1);
  });
});
