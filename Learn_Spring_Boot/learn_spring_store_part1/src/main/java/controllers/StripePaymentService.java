package controllers;

import org.springframework.stereotype.Component;

public class StripePaymentService implements PaymentService {
    @Override
    public void ProcessPayment(double amount) {
        System.out.println("STRIPE!");
        System.out.println("Amount : " + amount);
    }
}
