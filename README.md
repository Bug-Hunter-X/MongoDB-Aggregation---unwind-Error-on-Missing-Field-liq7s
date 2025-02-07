# MongoDB Aggregation Pipeline Error: Handling Missing Fields in $unwind

This repository demonstrates a common error in MongoDB aggregation pipelines involving the `$unwind` operator.  Specifically, attempting to unwind a field that might be missing in some documents can lead to unexpected behavior, including pipeline failures or inaccurate results. 

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem
The original aggregation pipeline uses `$lookup` to join two collections and then `$unwind` to de-normalize the results. If the `foreignKey` does not exist in some documents, `$unwind` will throw an error or produce incomplete results. 

## Solution
The solution involves adding a `$match` stage before `$unwind` to filter out documents where the `results` array is empty.