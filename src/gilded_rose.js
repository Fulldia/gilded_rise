
/*
name = nom du produit (chaine de caractère)
sellin = nombre de jours avant peremption (entier)
quality = qualité du produit (entier) jamais supérieur a 50 %
*/

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  /*
  En fonction de l'age du produit on update sellin et quality
  
  Aged brie = qualité augmente a mesure qu'il vieillit
  Sulfuras jamais vendu et qualité fixe

  */
  updateQuality(indice) {
    this.sellIn--
    this.decreaseQuality(indice)
  }
  decreaseQuality(indice){
    const minQuality = 0
    if (this.quality > minQuality){
      if (this.sellIn <= 0){
        this.quality = this.quality-2
        if (this.quality < 0){
          this.quality = 0
        }
      }else{
        this.quality = this.quality - 1
      }
    }

//
  }


}
/*
qualité augmente jusqu'a 50 max et sellin decremente
*/
class AgedBrie extends Item {
  updateQuality(){
    this.name="Aged Brie";
    const maxQuality = 50
    this.sellIn--
    if (this.quality < maxQuality){
      this.quality++
    }
  }
}

class Sulfura extends Item {
  constructor(name, sellIn, quality){
    super("Sulfuras, Hand of Ragnaros", sellIn, 100)
  }
  //updateQuality(){}
}


/*
  Backstage passes to a TAFKAL80ETC concert augmente en qualité a mesure que la date de perremption approche +2 lorsque sellin =<10 || +3 =<5 || 0 sellin ==0

*/
class Backstage extends Item {
  updateQuality(){
    this.name="Backstage passes to a TAFKAL80ETC concert";
    this.sellIn--

    const dix = 10
    const cinq = 5
    const finConcert = 0
    
    if (this.sellIn <= finConcert){
      this.quality = 0
    }
    else if (this.sellIn <= cinq){
      this.quality = this.quality + 3
    } 
    else if (this.sellIn <= dix) {
      this.quality = this.quality + 2
    }
  }
}

class Conjured extends Item {
  updateQuality() {
    this.sellIn--
    this.decreaseQuality(2)
  }
}


class Shop {
  constructor(items=[]){
    this.items = items;
  } 
  updateQuality() {
    this.items.map(item => {
      item.updateQuality()
    })

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  AgedBrie,
  Sulfura,
  Backstage
}
