package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class OrderService {
    private PaymentService paymentService;
    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // Constractor Injection "Open Closed Principal"
    @Autowired
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void placeholder() {
        paymentService.ProcessPayment(10.3);
    }
}

