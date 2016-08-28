
export default class ApiProvider {


    constructor() {
        this._defaultUrlParams = {
            version: 'v1'
        };
    }

    setVersion(value) {
        this._defaultUrlParams.version = value;
    }

    getVersion() {
        return this._defaultUrlParams.version;
    }

    generateUrl(relativeUrl) {
       return `/${ this.getVersion() }/` + relativeUrl;
    }

    $get() {
        "ngInject";
        return {
            generateUrl: (relativeUrl) =>  this.generateUrl(relativeUrl)
        };
    }
}
