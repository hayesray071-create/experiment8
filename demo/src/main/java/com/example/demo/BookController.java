
package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class BookController {

    @GetMapping("/book")
    public String getBook() {
        return "Book Name: Java Programming | Author: James Gosling";
    }

    @PostMapping("/feedback")
    public String submitFeedback(@RequestBody String feedback) {
        return "Feedback received: " + feedback;
    }
}
