package learn.com.learn_spring_store;

import controllers.OrderService;
import controllers.PaypalPaymentService;
import controllers.StripePaymentService;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"controllers"})

public class LearnSpringStoreApplication {
	public static void main(String[] args) {
		// SpringApplication.run(LearnSpringStoreApplication.class, args);
		var OrderService = new OrderService(new PaypalPaymentService());
		OrderService.placeholder();
		OrderService.setPaymentService(new StripePaymentService());
		OrderService.placeholder();
	}
}

