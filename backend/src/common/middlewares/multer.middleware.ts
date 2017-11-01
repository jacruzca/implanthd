import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import * as path from 'path';
import * as AWS from 'aws-sdk';
import { Constants } from '../constants';

@Middleware()
export class MulterMiddleware implements NestMiddleware {
    resolve(): (req, res, next) => void {
        const s3 = new AWS.S3();
        const storage = multerS3({
            s3,
            bucket: Constants.s3Bucket,
            contentType: multerS3.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            metadata: (req, file, cb) => {
                cb(null, {fieldName: file.fieldname});
            },
            key: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            },
        });
        const upload = multer({storage});
        return upload.any();
    }
}