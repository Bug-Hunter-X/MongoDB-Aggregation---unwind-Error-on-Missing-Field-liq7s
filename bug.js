```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results"
  }
]);
```