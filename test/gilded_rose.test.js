const {Shop, Item, ShopDataAccess} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
