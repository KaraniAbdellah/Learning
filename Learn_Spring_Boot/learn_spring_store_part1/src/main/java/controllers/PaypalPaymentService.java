package controllers;

import org.springframework.stereotype.Component;

@Component
public class PaypalPaymentService implements PaymentService {
    @Override
    public void ProcessPayment(double amount) {
        System.out.println("Paypal");
        System.out.println("Amount: " + amount);
    }
}


