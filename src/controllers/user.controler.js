import {asyncHandler} from "../util/asyncHandler.js";

const registerUser = asyncHandler( async(requestAnimationFrame, res) => {
    res.status(200).jason({
        message: "ok"
    })
})

export {
    registerUser,

}