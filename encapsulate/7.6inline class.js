class TrackingInformation {

}

class Shipment {
    get trackingInfo() {
        return `${(this._shippingCompany)}: ${(this._trackingNumber)}`;
    }

    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }

    get shippingCompany() {
        return this._shippingCompany;
    }

    get trackingNumber() {
        return this._trackingNumber;
    }
    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }

}
