const mongoose    = require('mongoose')
const timestamps = require('mongoose-timestamp')

const photoSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
})

photoSchema.plugin(timestamps);

module.exports = mongoose.model("Photo",photoSchema);
