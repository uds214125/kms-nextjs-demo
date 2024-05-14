import mongoose from "mongoose";

export default async ()=>{
    const dbState = [{
        value: 0,
        label: "disconnected"
    },{
        value: 1,
        label: "connected"
    },
    {
        value: 2,
        label: "connecting"
    },
    {
        value: 3,
        label: "disconnecting"
    }];
    // {
    //         useNewUrlParser: true,
    //         userCreateIndex: true,
    //         useUnifiedTopology: true,
    //         useFindAndModify: false
    //     }
    try {
        const connectRes = await mongoose.connect("mongodb://127.0.0.1:27017", {
            dbName: "nextjsdb",
            user: "",
            pass:""
        });
        console.log("connected successfully", connectRes.STATES.connected)
        // await mongoose.connect("mondob://localhost:27017", {
        //     dbName: "nextdb",
        //     user: "",
        //     pass:"",
        //     // authSource: ""
        // },()=>{
        //     const stateValue = +mongoose.connection.readyState;
        //     console.log(dbState.find(s=> s.value === stateValue).label, " to db");
        // });
    } catch (error) {
        console.error(error);
    }
}