"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _dotenv = require("dotenv");
const _bodyparser = /*#__PURE__*/ _interop_require_default(require("body-parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
(0, _dotenv.config)();
app.use(_bodyparser.default.urlencoded({
    extended: true
}));
app.use(_bodyparser.default.json());
app.get("/student/:name", async (req, res)=>{
    const name = req.params.name;
    res.status(200).send(name);
});
app.listen(5001, ()=>{
    console.log('Server is running on port 5001');
});
