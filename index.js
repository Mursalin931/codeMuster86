var MongoClient = require('mongodb').MongoClient;

var URL = " mongodb://127.0.0.1:27017/";

var config = { useUnifiedTopology: true };


// Connecting Data Base.....

MongoClient.connect(URL, config, (error, myMongoClint) => {

    if (error) {
        console.log("Your Connectiion is Lost")
    } else {
        console.log("Connection Succesed");
        InsertData(myMongoClint);
        //deleteItemData(myMongoClint);
        //deleteAll(myMongoClint);
        //findDataWithOutCondition(myMongoClint);
        //findDataWithCondition(myMongoClint);
        // findAllData(myMongoClint);
        // findAllDataByProjetion(myMongoClint);
        // findAllDataByQuery(myMongoClint);
        // findAllDataByLimit(myMongoClint);
        // findAllDataBySort(myMongoClint);
        // myUpDateData(myMongoClint);
        // createCollection(myMongoClint);
        // InsertTeacherData(myMongoClint);
        //deleteMyCollection(myMongoClint);
    }
})

// Insert Data .........

const InsertData = (myMongoClint) => {

    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student');

    //create jsonObject file.........

    var myData = { name: "Babu", id: "0005", age: "27", dept: "cse", roll: 504 };


    myCollection.insertOne(myData, (error) => {

        if (error) {

            console.log("Data insrt Faild");
        } else {

            console.log("Data insrt Successed");
        }

    })



}

// delete One Item from data base.....

const deleteItemData = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student');
    var dltData = { roll: 508 };

    myCollection.deleteOne(dltData, (error) => {

        if (error) {
            console.log("Data Delete Faild");

        } else {
            console.log("Data Delete Successed");

        }
    });




}

// delete All Data form data base.....

const deleteAll = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student');

    myCollection.deleteMany((error, resultObject) => {

        if (error) {
            console.log("Data delete Faild")
        } else {

            console.log(resultObject.result.n + " : Item Has been Deleted");

        }
    })

}

// find One Item Of Data withOut  Condition....

const findDataWithOutCondition = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student');
    var findObject = {}
    myCollection.findOne(findObject, (error, result) => {
        if (error) {
            console.log("Data Find Error.")
        } else {

            console.log(result)
        }
    })

}

// find One Item Of Data with Condition....

const findDataWithCondition = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student');
    var findObject = { roll: 508 }
    myCollection.findOne(findObject, (error, result) => {
        if (error) {
            console.log("Data Find Error.")
        } else {

            console.log(result)
        }
    })

}

// find All data........

const findAllData = (myMongoClint) => {
        var myDataBase = myMongoClint.db('school');
        var myCollection = myDataBase.collection('student')

        myCollection.find().toArray((error, result) => {

            if (error) {
                console.log('All Data Not Found')

            } else {
                console.log(result);
            }


        })
    }
    // Find Specefic Data usi Projection.....

const findAllDataByProjetion = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student')

    var ItemObject = {};
    var ItemProjection = { projection: { dept: "", roll: "", age: "", name: "" } }


    myCollection.find(ItemObject, ItemProjection).toArray((error, newresult) => {

        if (error) {
            console.log('All Data Not Found')

        } else {
            console.log(newresult);
        }


    })




}

const findAllDataByQuery = (myMongoClint) => {
        var myDataBase = myMongoClint.db('school');
        var myCollection = myDataBase.collection('student')

        var Qurey = { age: "27" };



        myCollection.find(Qurey).toArray((error, result) => {

            if (error) {
                console.log('All Data Not Found')

            } else {
                console.log(result);
            }


        })

    }
    // using limt to find Data....

const findAllDataByLimit = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student')


    myCollection.find().limit(4).toArray((error, result) => {

        if (error) {
            console.log('All Data Not Found')

        } else {
            console.log(result);
        }

        console.log("Total data 04 Out of 09 ");
    })

}

// find All Data by sort....

const findAllDataBySort = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student')

    var dataSort = { id: 1 } // start from 1 and than stoped to

    myCollection.find().sort(dataSort).toArray((error, result) => {

        if (error) {
            console.log('All Data Not Found')

        } else {
            console.log(result);
        }

        console.log("Total data 04 Out of 09 ");
    })

}

// Data UpDate....

const myUpDateData = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('student');
    var SearchData = { id: "0006" };
    var UpdateDta = { $set: { name: "Mohannod ALI Khan", roll: "401", age: "35", id: "0006" } }

    myCollection.updateOne(SearchData, UpdateDta, (error, newresult) => {

        if (error) {
            console.log("Data Delete Faild");

        } else {
            console.log(newresult.result.n + " : Item Has been Included");

        }

    })
}

// create new Collection inside school DB...

const createCollection = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    myDataBase.createCollection("teacher", (error, result) => {

        if (error) {

            console.log("Data Collection does Not Create")

        } else {
            console.log(result)
        }

    })


}

// insert new Data into  Collection inside school DB...

const InsertTeacherData = (myMongoClint) => {
    var myDataBase = myMongoClint.db('school');
    var myCollection = myDataBase.collection('teacher');

    var teacherData = { name: "Mehedi", id: "01", age: "27", dept: "cse", city: "Dhaka" };
    myCollection.insertOne(teacherData, (error) => {
        if (error) {
            console.log("no Data found")
        } else {
            console.log("Data create successed");
        }

    })


}

// Delete New Collection..........


const deleteMyCollection = (myMongoClint) => {

    var myDataBase = myMongoClint.db('school');

    myDataBase.dropCollection("teacher", (error, result) => {

        if (error) {
            console.log("Data Not deleted ")
        } else {
            console.log(result);
        }


    })

}