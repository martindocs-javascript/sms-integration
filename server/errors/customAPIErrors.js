// Custom class for errors messages
class CustomAPIErrors extends Error {
    constructor(message){
        super(message);
    }
}

export default CustomAPIErrors;