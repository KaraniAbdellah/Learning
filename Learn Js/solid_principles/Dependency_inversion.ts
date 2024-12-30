// Dependency inversion
/*
    - high level module should not depend in low level module
        Both should depend in abstraction
    - Abstraction Should not depend in details (concrete implementation)
        should depend on abstractions
*/


class DeliverDriver {
    deliverProduct(): void {
        // delevier product ...
    }
}

class DeliveryCompany {
    SendProduct(): boolean {
        const d: DeliverDriver = new DeliverDriver();
        d.deliverProduct();
        return true;
    }
}

// Solution
interface DeliverService {
    deliverProduct(): void;
}

class DeliverDriver1 implements DeliverService {
    deliverProduct(): void { }
}

class DeliveryCompany1 implements DeliverService {
    deliverProduct(): void {

    }
    private deliver_service: DeliverService;
    constructor(deliver_service: DeliverService) {
        this.deliver_service = deliver_service;
    }
    sendProduct() {
        this.deliver_service.deliverProduct();
    }
}



