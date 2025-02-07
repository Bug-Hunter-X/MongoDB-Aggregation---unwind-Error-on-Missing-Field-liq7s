```javascript
//Corrected aggregation pipeline
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
    $match: {
      "results.0": { $exists: true }
    }
  },
  {
    $unwind: "$results"
  }
]);
```