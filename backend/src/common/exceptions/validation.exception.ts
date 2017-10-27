export class ValidationException extends Error {
    private errors: Array<string>;

    constructor(m: string, errors: Array<string>) {
        super(m);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.errors = errors;
    }
}