const authRoutes=require("./auth");
const userRoutes=require("./users");
const doctorRoutes = require('./doctor');

exports.routes = (app) => {
    app.use('/',authRoutes);
    app.use('/',userRoutes);
    app.use('/',doctorRoutes);
}