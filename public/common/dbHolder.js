const DbHolder = (function () {
  const DB_NAME = "MoneyDb";

  const db = new Dexie(DB_NAME);

  db.version(1).stores({
    //お金
    money: `date`,
  });


  return {
    getDb() {
      return db
    }
  }
})();
