import * as _ from 'lodash';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

type MetaType = StringConstructor | BooleanConstructor | NumberConstructor | ArrayConstructor | ObjectConstructor;

const toValidate = (metatype): boolean => {
    const types: Array<MetaType> = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
};

export function validateObject(obj: object, metatype: ClassType<any>): Promise<Array<string>> {
    if (!metatype || !toValidate(metatype)) {
        return new Promise(resolve => []);
    }
    const object = plainToClass(metatype, obj);
    return validate(object).then(errors => {
        if (errors.length > 0) {
            const errs = errors.map(err => {
                return _.values(err.constraints);
            });
            return _.flattenDeep(errs);
        }
        return [];
    });
};