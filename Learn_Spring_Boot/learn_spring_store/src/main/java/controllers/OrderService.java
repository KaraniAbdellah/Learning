package controllers;

public class OrderService {
    private PaymentService paymentService;
    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // Constractor Injection "Open Closed Principal"
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void placeholder() {
        paymentService.ProcessPayment(10.3);
    }
}

