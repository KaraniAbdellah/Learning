package controllers;
public class PaypalPaymentService implements PaymentService {
    @Override
    public void ProcessPayment(double amount) {
        System.out.println("Paypal");
        System.out.println("Amount: " + amount);
    }
}


