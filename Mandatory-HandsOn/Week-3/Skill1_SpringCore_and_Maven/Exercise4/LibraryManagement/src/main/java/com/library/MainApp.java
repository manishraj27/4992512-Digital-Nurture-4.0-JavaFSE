package com.library;

import com.library.service.BookService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.library")
public class MainApp {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(MainApp.class);

        BookService bookService = context.getBean(BookService.class);
        bookService.displayBook();

        context.close();
    }
}
