package learn.com.learn_spring_store;

import controllers.OrderService;
import controllers.PaypalPaymentService;
import controllers.StripePaymentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"controllers"})

public class LearnSpringStoreApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(LearnSpringStoreApplication.class, args);
		var orderService = context.getBean(OrderService.class);
		orderService.placeholder();
	}
}

