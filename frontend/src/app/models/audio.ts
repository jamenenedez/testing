export class Audio {

    constructor(_id = "",
        bitrate = 0,
        contentSize = 0,
        contentURI = "",
        location_x = 0,
        location_y = 0,
        encodingFormat = '',
        uploadDate = '',
        duration = 0,
        label = '') {
        this._id = _id;
        this.bitrate = bitrate;
        this.contentSize = contentSize;
        this.contentURI = contentURI;
        this.location_x = location_x;
        this.location_y = location_y;
        this.encodingFormat = encodingFormat;
        this.uploadDate = uploadDate;
        this.duration = duration;
        this.label = label;
    }

    _id: String;
    bitrate: number;
    contentSize: number;
    contentURI: string;
    location_x: number;
    location_y: number;
    encodingFormat: string;
    uploadDate: string;
    duration: number;
    label: string;
}